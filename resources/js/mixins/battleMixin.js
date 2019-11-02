import { mapGetters } from "vuex";

export default {
    data: function() {
        return {
            maxhp: 0,
            hp: 0,
            maxmp: 0,
            mp: 0,
            atk: 0,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 0,
            hit: 0,
            flee: 0
        };
    },
    computed: {
        ...mapGetters({
            user: "getUser",
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
    mounted: function() {
        this.maxhp = user.status.vit * 10;
        this.hp = user.status.vit * 10;
        this.maxmp = user.status.int * 5;
        this.mp = user.status.int * 5;
        this.atk = user.status.str * 3;
        this.matk = user.status.int * 3;
        this.def = user.status.vit * 3;
        this.mdef = user.status.vit + user.status.int * 2;
        this.spd = user.status.agi * 3;
        this.hit = user.status.dex * 2 + user.status.luc;
        this.flee = user.status.agi * 2 + user.status.luc;
    },
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

        attackPhase: async function(char1, char2) {
            this.showBattleEffect("剣", this);
            console.log("プレイヤーの攻撃");
            let damage = char1.atk - char2.def;
            if (damage > 0) {
                char2.hp -= damage;
            } else {
                damage = 0;
            }
            console.log(damage + ":" + char2.hp);
            this.$store.commit(
                "setMessage",
                char2.name + "に" + damage + "のダメージ"
            );
            this.$store.commit("setDamage", damage);
            this.$store.commit("setIsShowDamage", true);

            await this.sleep(500);
            this.$store.commit("setIsShowEffect", false);
            this.$store.commit("setDamage", "");
            this.$store.commit("setIsShowDamage", false);
        },
        lifeCheck: function(player, monster) {
            if (player.hp <= 0) {
                this.loseBattle();
                return true;
            }
            if (monster.hp <= 0) {
                this.winBattle();
                return false;
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
            this.player.battle.hp = this.player.battle.maxhp;
        },

        showBattleEffect: function(type, vm) {
            vm.$store.commit("setIsShowEffect", true);
            const effectArray = this.selectBattleEffect(type, vm);
            vm.$store.commit("setBattleEffectPath", effectArray.img);
        },
        selectBattleEffect: function(type, vm) {
            let effectArray = [];
            let effectLength = 0;
            let index = 0;
            switch (type) {
                case "剣":
                    effectArray = vm.swordEffect;
                    break;
                case "火":
                    effectArray = vm.fireEffect;
                    break;
                case "雷":
                    effectArray = vm.thunderEffect;
                    break;
                case "水":
                    effectArray = vm.waterEffect;
                    break;
                case "風":
                    effectArray = vm.windEffect;
                    break;
                case "地":
                    effectArray = vm.earthEffect;
                    break;
                case "闇":
                    effectArray = vm.darkEffect;
                    break;
                case "回復":
                    effectArray = vm.healEffect;
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
