export default {
    methods: {
        getScene: function(count) {
            const currentEvent = this["eventObj"];
            if (!Array.isArray(currentEvent)) {
                console.log("データが不正です。");
                return false;
            }
            const vm = this;
            const eventLength = currentEvent.length;
            if (count <= eventLength) {
                currentEvent[count - 1](vm);
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
        selectEvent: function(event) {
            this.$store.commit("setMessage", event.msg);
            this.$store.commit("setChoice1", event.choice[0]);
            this.$store.commit("setChoice2", event.choice[1]);
        },
        windowEvent(event) {
            this[event.window] = true;
            this.$store.commit("setMessage", event.msg);
        },
        soundSet(boolean) {
            this.$store.commit("setSoundFlag", boolean);
            this.closeSoundModal();
            this.$store.commit("setSceneCount", this.sceneCount + 1);
            this.getScene(this.sceneCount);
        }
    }
};
