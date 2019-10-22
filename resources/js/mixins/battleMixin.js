import { mapGetters } from "vuex";

export default {
    data: function() {
        return {};
    },
    created: function() {},
    computed: {
        ...mapGetters({
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
        // showBattleEffect: type => {
        //     const effectArray = this.selectBattleEffect(type, vm);
        //     this.$store.commit("setBattleEffectPath", effectArray.img);
        // },
        // selectBattleEffect: type => {
        //     console.log(this.swordEffect);
        //     let effectArray = [];
        //     let effectLength = 0;
        //     let index = 0;
        //     switch (type) {
        //         case "剣":
        //             effectArray = this.swordEffect;
        //             console.log(effectArray);
        //             break;
        //         case "火":
        //             effectArray = this.fireEffect;
        //             break;
        //         case "雷":
        //             effectArray = this.thunderEffect;
        //             break;
        //         case "水":
        //             effectArray = this.waterEffect;
        //             break;
        //         case "風":
        //             effectArray = this.windEffect;
        //             break;
        //         case "地":
        //             effectArray = this.earthEffect;
        //             break;
        //         case "闇":
        //             effectArray = this.darkEffect;
        //             break;
        //         case "回復":
        //             effectArray = this.healEffect;
        //             break;
        //         default:
        //             return "";
        //     }
        //     effectLength = effectArray.length;
        //     index = Math.floor(Math.random() * effectLength);
        //     return effectArray[index];
        // }
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
