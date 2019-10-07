export default {
    methods: {
        getScene: function(count) {
            const vm = this;
            const eventLength = this.eventObj.length;
            if (count <= eventLength) {
                this.eventObj[count - 1](vm);
            } else {
                console.log("イベント終了");
            }
        },
        soundSet(boolean) {
            this.$store.commit("setSoundFlag", boolean);
            this.closeSoundModal();
            this.$store.commit("setSceneCount", this.sceneCount + 1);
            this.getScene(this.sceneCount);
        }
    }
};
