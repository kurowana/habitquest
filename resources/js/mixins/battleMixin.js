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
        showBattleEffect: function(type, vm) {
            const effectArray = this.selectBattleEffect(type, vm);
            this.$store.commit("setBattleEffectPath", effectArray.img);
        },
        selectBattleEffect: function(type, vm) {
            console.log(vm.swordEffect);
            let effectArray = [];
            let effectLength = 0;
            let index = 0;
            switch (type) {
                case "剣":
                    effectArray = vm.swordEffect;
                    console.log(effectArray);
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
            }
            effectLength = effectArray.length;
            index = Math.floor(Math.random() * effectLength);

            return effectArray[index];
        }
    }
};
