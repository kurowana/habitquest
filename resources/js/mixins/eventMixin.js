import { mapGetters } from "vuex";

export default {
    data: function() {
        return {
            isShowChoice: false,
            activeMotion: {
                l1: { type: "none" },
                l2: { type: "none" },
                c: { type: "none" },
                r1: { type: "none" },
                r2: { type: "none" }
            },
            activeEffect: {
                l1: { type: "none" },
                l2: { type: "none" },
                c: { type: "none" },
                r1: { type: "none" },
                r2: { type: "none" }
            }
        };
    },
    computed: {
        ...mapGetters({
            currentEventObj: "getEventObj",
            charList: "getCharList"
        }),
        modalBase: function() {
            return {
                color: "red",
                fontSize: "20px"
            };
        }
    },
    methods: {
        changeBg: function(place) {
            switch (place) {
                case "ホーム":
                    this.$store.commit("setBgImg", "home");
                    break;
                case "町":
                    this.$store.commit("setBgImg", "town");
                    break;
                case "道具屋":
                    this.$store.commit("setBgImg", "itemshop");
                    break;
                case "武器屋":
                    this.$store.commit("setBgImg", "weaponshop");
                    break;
                case "酒場":
                    this.$store.commit("setBgImg", "bar");
                    break;
                case "神殿":
                    this.$store.commit("setBgImg", "shinden");
                    break;
                case "大樹":
                    this.$store.commit("setBgImg", "tree");
                    break;
                case "ダンジョン":
                    this.$store.commit("setBgImg", "dungeon");
                    break;
                case "採集":
                    this.$store.commit("setBgImg", "stream");
                    break;
                case "":
                    this.$store.commit("setBgImg", "");
                    break;
            }
        },
        getScene: function(count) {
            this.activeMotion.l1.type = "none";
            this.activeMotion.l2.type = "none";
            this.activeMotion.c.type = "none";
            this.activeMotion.r1.type = "none";
            this.activeMotion.r2.type = "none";

            const currentEvent = this[this.currentEventObj];

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
        randomEvent: function(list) {
            if (!Array.isArray(list)) {
                console.log("データが不正です。");
                return false;
            }
            const count = list.length;
            const random = Math.floor(Math.random() * count);
            this.$store.commit("setEventObj", list[random]);
            this.$store.commit("setSceneCount", 0);
            this.$store.commit("setCharName", "");
            this.setEvent({ type: "msg", content: "――――――" });
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
            this.isShowChoice = true;
        },
        windowEvent(event) {
            this[event.window] = true;
            this.$store.commit("setMessage", event.msg);
        },
        completeChoice() {
            this.isShowChoice = false;
        },
        showChar(name, pos) {
            let char = null;
            if (name) {
                char = this.charList[name];
            } else {
                char = { name: "", imgL: "", imgR: "" };
            }
            switch (pos) {
                case "l1":
                    this.$store.commit("setCharImgL1", char.imgL);
                    break;
                case "l2":
                    this.$store.commit("setCharImgL2", char.imgL);
                    break;
                case "c":
                    this.$store.commit("setCharImgC", char.imgL);
                    break;
                case "r1":
                    this.$store.commit("setCharImgR1", char.imgR);
                    break;
                case "r2":
                    this.$store.commit("setCharImgR2", char.imgR);
                    break;
            }
        },
        setSpeaker: function(name, pos) {
            this.downOpacity();
            this.$store.commit("setCharName", name);
            switch (pos) {
                case "l1":
                    this.$store.commit("setOpacityL1", 1);
                    this.$store.commit("setZIndexL1", 20);
                    break;
                case "l2":
                    this.$store.commit("setOpacityL2", 1);
                    this.$store.commit("setZIndexL2", 20);
                    break;
                case "c":
                    this.$store.commit("setOpacityC", 1);
                    this.$store.commit("setZIndexC", 20);
                    break;
                case "r1":
                    this.$store.commit("setOpacityR1", 1);
                    this.$store.commit("setZIndexR1", 20);
                    break;
                case "r2":
                    this.$store.commit("setOpacityR2", 1);
                    this.$store.commit("setZIndexR2", 20);
                    break;
                default:
                    break;
            }
        },
        clearChar: function() {
            this.$store.commit("setCharImgL1", "");
            this.$store.commit("setCharImgL2", "");
            this.$store.commit("setCharImgC", "");
            this.$store.commit("setCharImgR1", "");
            this.$store.commit("setCharImgR2", "");
        },
        resetOpacity: function() {
            this.$store.commit("setOpacityL1", 1);
            this.$store.commit("setOpacityL2", 1);
            this.$store.commit("setOpacityC", 1);
            this.$store.commit("setOpacityR1", 1);
            this.$store.commit("setOpacityR2", 1);

            this.$store.commit("setZIndexL1", 10);
            this.$store.commit("setZIndexL2", 10);
            this.$store.commit("setZIndexC", 10);
            this.$store.commit("setZIndexR1", 10);
            this.$store.commit("setZIndexR2", 10);
        },
        downOpacity: function() {
            this.$store.commit("setOpacityL1", 0.8);
            this.$store.commit("setOpacityL2", 0.8);
            this.$store.commit("setOpacityC", 0.8);
            this.$store.commit("setOpacityR1", 0.8);
            this.$store.commit("setOpacityR2", 0.8);

            this.$store.commit("setZIndexL1", 10);
            this.$store.commit("setZIndexL2", 10);
            this.$store.commit("setZIndexC", 10);
            this.$store.commit("setZIndexR1", 10);
            this.$store.commit("setZIndexR2", 10);
        },
        setMotion(target, effect) {
            this.activeMotion[target]["type"] = effect;
        },
        setEffect(target, effect) {
            this.activeEffect[target]["type"] = effect;
        }
    }
};
