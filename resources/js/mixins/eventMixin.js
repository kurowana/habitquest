export default {
    methods: {
        // nextScene: function() {
        //     this.$store.commit("setNextFlag", false);
        //     this.$store.commit("setSceneCount", this.sceneCount + 1);
        //     this.$emit("get-scene", this.sceneCount);
        // },
        // changeScene: function() {
        //     if (this.NextFlag === true) {
        //         this.nextScene();
        //     } else {
        //         return;
        //     }
        // },
        getScene: function(count) {
            if (!Array.isArray(this.eventObj)) {
                console.log("データが不正です。");
                return false;
            }
            const vm = this;
            const eventLength = this.eventObj.length;
            if (count <= eventLength) {
                this.eventObj[count - 1](vm);
            } else {
                console.log("イベント終了");
                this.$store.commit("setSceneCount", 0);
            }
        },
        setEvent: function(event) {
            switch (event.type) {
                case "msg":
                    this.$store.commit("setEventType", "msg");
                    this.messageEvent(event.content);
                    break;
                case "select":
                    this.$store.commit("setEventType", "select");
                    this.selectEvent(event.content);
                    break;
                case "window":
                    this.$store.commit("setEventType", "window");
                    this.windowEvent(event.content);
                    break;
            }
        },
        messageEvent: function(message) {
            this.$store.commit("setMessage", message);
        },
        selectEvent: function(array) {},
        windowEvent(event) {
            this[event.window] = true;
            this.$store.commit("setMessage", event.msg);
        },
        // getScene: function(count) {
        //     const vm = this;
        //     const eventLength = this.eventObj.length;
        //     if (count <= eventLength) {
        //         this.eventObj[count - 1](vm);
        //     } else {
        //         console.log("イベント終了");
        //     }
        // },
        soundSet(boolean) {
            this.$store.commit("setSoundFlag", boolean);
            this.closeSoundModal();
            this.$store.commit("setSceneCount", this.sceneCount + 1);
            this.getScene(this.sceneCount);
        }
    }
};
