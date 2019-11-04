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
            this.showMonsterEffect("剣");
            this.attackPhase(user, monster).then(damage => {
                console.log(damage);
                this.showMonsterDamage(damage);
            });
        },
        monsterAttack: async function(monster, user) {
            this.showUserEffect("闇");
            this.attackPhase(monster, user).then(damage => {
                console.log(damage);
                this.showUserDamage(damage);
            });
        },

        attackPhase: async function(char1, char2) {
            let damage = char1.atk - char2.def;
            if (damage > 0) {
                char2.hp -= damage;
            } else {
                damage = 0;
            }
            this.$store.commit(
                "setMessage",
                char2.name + "に" + damage + "のダメージ"
            );
            return damage;
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
        },

        showUserDamage: async function(damage) {
            this.$store.commit("setUserDamageValue", damage);
            this.$store.commit("setUserDamageFlag", true);
            await this.sleep(500);
            this.$store.commit("setUserDamageValue", 0);
            this.$store.commit("setUserDamageFlag", false);
        },
        showMonsterDamage: async function(damage) {
            this.$store.commit("setMonsterDamageValue", damage);
            this.$store.commit("setMonsterDamageFlag", true);
            await this.sleep(500);
            this.$store.commit("setMonsterDamageValue", 0);
            this.$store.commit("setMonsterDamageFlag", false);
        },

        showUserEffect: async function(type) {
            this.$store.commit("setUserEffectFlag", true);
            const effectArray = this.selectBattleEffect(type);
            this.$store.commit("setUserEffectPath", effectArray.img);
            await this.sleep(500);
            this.$store.commit("setUserEffectFlag", false);
            this.$store.commit("setUserEffectPath", "");
        },
        showMonsterEffect: async function(type) {
            this.$store.commit("setMonsterEffectFlag", true);
            const effectArray = this.selectBattleEffect(type);
            this.$store.commit("setMonsterEffectPath", effectArray.img);
            await this.sleep(500);
            this.$store.commit("setMonsterEffectFlag", false);
            this.$store.commit("setMonsterEffectPath", "");
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
