import { mapGetters } from "vuex";

export default {
    data: function() {
        return {};
    },
    computed: {
        ...mapGetters({
            user: "getUser",
            battleStatus: "getBattleStatus",
            monster: "getBattleMonster",
            monsterList: "getMonsterList",
            swordEffect: "getSwordEffect",
            fireEffect: "getFireEffect",
            thunderEffect: "getThunderEffect",
            waterEffect: "getWaterEffect",
            windEffect: "getWindEffect",
            earthEffect: "getEarthEffect",
            darkEffect: "getDarkEffect",
            healEffect: "getHealEffect"
        })
    },
    created: function() {},
    mounted: function() {},
    methods: {
        setDungeonMonster: function() {
            const length = this.monsterList.length;
            const randauNum = Math.floor(Math.random() * length);
            const selectedMonster = Object.assign(
                {},
                this.monsterList[randauNum]
            );
            this.$store.commit("setBattleMonster", selectedMonster);
        },
        addStageCorrection: function(monster, stage) {
            const correction = 1 + stage * 0.1;
            monster.hp = Math.floor(monster.hp * correction);
            monster.mp = Math.floor(monster.mp * correction);
            monster.atk = Math.floor(monster.atk * correction);
            monster.matk = Math.floor(monster.matk * correction);
            monster.def = Math.floor(monster.def * correction);
            monster.mdef = Math.floor(monster.mdef * correction);
            monster.spd = Math.floor(monster.spd * correction);
            monster.hit = Math.floor(monster.hit * correction);
            monster.flee = Math.floor(monster.flee * correction);
            this.$store.commit("setBattleMonster", monster);
        },

        userAttack: async function(user, monster) {
            this.showEffect("monster", "剣");
            this.$store.commit("setBattleMotionType", "effect");
            await this.attackPhase(user, monster).then(damage => {
                const message = damage + "damage!!";
                this.showDamage("monster", message);
            });
            await this.sleep(500);
            this.$store.commit("setBattleMotionType", "none");
            if (user.mp > 10) {
                this.$store.commit("setBattleMotionType", "effect");
                this.showEffect("monster", "火");
                this.magicPhase(user, monster).then(damage => {
                    const message = damage + "damage!!";
                    this.showDamage("monster", message);
                });
                await this.sleep(500);
                this.$store.commit("setBattleMotionType", "none");
            }
        },
        monsterAttack: async function(monster, user) {
            this.showEffect("user", "剣");
            this.$store.commit("setBattleMotionType", "motion3");
            await this.attackPhase(monster, user).then(damage => {
                const message = damage + "damage!!";
                this.showDamage("user", message);
            });
            await this.sleep(500);
            if (monster.mp > 10) {
                this.$store.commit("setBattleMotionType", "motion3");
                this.showEffect("user", "闇");
                this.magicPhase(monster, user).then(damage => {
                    const message = damage + "damage!!";
                    this.showDamage("user", message);
                });
                await this.sleep(500);
                this.$store.commit("setBattleMotionType", "motion3");
            }
        },

        attackPhase: async function(char1, char2) {
            let damage = char1.atk - char2.def;
            let addDamage = Math.floor(Math.random() * 20);
            if (damage > 0) {
                damage = damage + addDamage;
            } else {
                damage = addDamage;
            }
            char2.hp -= damage;
            this.$store.commit(
                "setMessage",
                "剣で" + char2.name + "に" + damage + "のダメージ"
            );
            return damage;
        },

        magicPhase: async function(char1, char2) {
            char1.mp -= 10;
            let damage = char1.matk - char2.mdef;
            let addDamage = Math.floor(Math.random() * 30);
            if (damage > 0) {
                damage = damage + addDamage;
            } else {
                damage = addDamage;
            }
            char2.hp -= damage;

            this.$store.commit(
                "setMessage",
                "魔法で" + char2.name + "に" + damage + "のダメージ"
            );
            return damage;
        },
        healPhase: function(char1) {
            this.showUserEffect("回復");
            char1.mp -= 10;
            let recover = char1.matk * 3;
            let addRecover = Math.floor(Math.random() * 50);
            recover = recover + addRecover;
            char1.hp += recover;
            this.$store.commit(
                "setMessage",
                char1.name + "のHPが" + recover + "回復した"
            );
            return recover;
        },

        userLifeCheck(user) {
            if (user.hp <= 0) {
                this.loseBattle();
                return true;
            } else {
                return false;
            }
        },

        monsterLifeCheck(monster) {
            if (monster.hp <= 0) {
                this.winBattle();
            }
            return false;
        },

        winBattle: function() {
            this.tempMoney += 10 * this.currentStage;
            this.currentStage++;
            this.setDungeonMonster();
            this.addStageCorrection(this.monster, this.currentStage);
        },
        loseBattle: function() {
            this.currentStage = 1;
            this.battleUser.hp = this.battleStatus.hp;
            this.battleUser.mp = this.battleStatus.mp;
        },

        showDamage: async function(target, message) {
            this.$store.commit("setDamageTarget", target);
            this.$store.commit("setDamageMessage", message);
            this.$store.commit("setDamageFlag", true);
            await this.sleep(500);
            this.$store.commit("setDamageFlag", false);
        },

        showEffect: async function(target, type) {
            this.$store.commit("setEffectTarget", target);
            const effectArray = this.selectBattleEffect(type);
            this.$store.commit("setEffectPath", effectArray.img);
            this.$store.commit("setEffectFlag", true);
            await this.sleep(500);
            this.$store.commit("setEffectFlag", false);
        },

        selectBattleEffect: function(type) {
            let effectArray = [];
            let effectLength = 0;
            let index = 0;
            switch (type) {
                case "剣":
                    effectArray = this.swordEffect;
                    break;
                case "火":
                    effectArray = this.fireEffect;
                    break;
                case "雷":
                    effectArray = this.thunderEffect;
                    break;
                case "水":
                    effectArray = this.waterEffect;
                    break;
                case "風":
                    effectArray = this.windEffect;
                    break;
                case "地":
                    effectArray = this.earthEffect;
                    break;
                case "闇":
                    effectArray = this.darkEffect;
                    break;
                case "回復":
                    effectArray = this.healEffect;
                    break;
                default:
                    return "";
            }
            effectLength = effectArray.length;
            index = Math.floor(Math.random() * effectLength);
            return effectArray[index];
        }
    }
};
