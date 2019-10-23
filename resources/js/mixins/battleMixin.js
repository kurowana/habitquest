import { mapGetters } from "vuex";

export default {
    data: function() {
        return {};
    },
    created: function() {},
    computed: {
        ...mapGetters({
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
        dungeonBattle: async function(vm) {
            let player = this.myStatus.battle;
            let endFlag = false;
            this.$store.commit("setMessage", "戦闘開始");
            while (!endFlag) {
                if (player.spd >= this.monster.spd) {
                    this.playerAttack(player, this.monster);
                    await this.sleep(500);
                    this.$store.commit("setIsShowEffect", false);
                    await this.sleep(100);
                    if (this.monster.hp <= 0) {
                        this.$store.commit("setMessage", "倒した");
                        this.winBattle();
                        this.currentStage++;
                        // this.$store.commit("setMonster", this.currentStage);
                        this.setDungeonMonster();
                        this.addStageCorrection(
                            this.monster,
                            this.currentStage
                        );
                    }
                    this.monsterAttack(player, this.monster);
                    await this.sleep(500);
                    this.$store.commit("setIsShowEffect", false);
                    await this.sleep(100);
                    if (player.hp <= 0) {
                        this.loseBattle();
                        endFlag = true;
                    }
                } else {
                    this.monsterAttack(player, this.monster);
                    await this.sleep(500);
                    this.$store.commit("setIsShowEffect", false);
                    await this.sleep(100);
                    if (player.hp <= 0) {
                        this.loseBattle();
                        endFlag = true;
                    }
                    this.playerAttack(player, this.monster);
                    await this.sleep(500);
                    this.$store.commit("setIsShowEffect", false);
                    await this.sleep(100);
                    if (this.monster.hp <= 0) {
                        this.$store.commit("setMessage", "倒した");
                        this.winBattle();
                        this.currentStage++;
                        // this.$store.commit("setMonster", this.currentStage);
                        this.setDungeonMonster();
                        this.addStageCorrection(
                            this.monster,
                            this.currentStage
                        );
                    }
                }
            }
        },
        playerAttack: function(player, monster) {
            this.showBattleEffect("剣", this);
            console.log("プレイヤーの攻撃");
            let damage = player.atk - monster.def;
            if (damage > 0) {
                monster.hp -= damage;
            }
            console.log(damage + ":" + monster.hp);
            this.$store.commit(
                "setMessage",
                monster.name + "に" + damage + "のダメージ"
            );
        },
        monsterAttack: function(player, monster) {
            this.showBattleEffect("火", this);
            let damage = monster.atk - player.def;
            if (damage > 0) {
                player.hp -= damage;
            }
            this.$store.commit(
                "setMessage",
                "主人公に" + damage + "のダメージ"
            );
        },
        winBattle: function() {
            this.tempMoney += 10 * this.currentStage;
        },
        loseBattle: function() {
            this.currentStage = 1;
            this.myStatus.battle.hp = this.myStatus.battle.maxhp;
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
