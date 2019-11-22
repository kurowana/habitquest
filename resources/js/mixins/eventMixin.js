import { mapGetters } from "vuex";

export default {
    data: function() {
        return {
            // isShowChoice: false,
            // activeMotion: {
            //     l1: { type: "none" },
            //     l2: { type: "none" },
            //     c: { type: "none" },
            //     r1: { type: "none" },
            //     r2: { type: "none" }
            // },
            // activeEffect: {
            //     l1: { type: "none" },
            //     l2: { type: "none" },
            //     c: { type: "none" },
            //     r1: { type: "none" },
            //     r2: { type: "none" }
            // }
        };
    },
    computed: {
        ...mapGetters({
            currentEventObj: "getEventObj",
            npcList: "getNpcList"
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
            // this.activeMotion.l1.type = "none";
            // this.activeMotion.l2.type = "none";
            // this.activeMotion.c.type = "none";
            // this.activeMotion.r1.type = "none";
            // this.activeMotion.r2.type = "none";

            const currentEvent = this[this.currentEventObj];

            if (!Array.isArray(currentEvent)) {
                console.log("データが不正です。");
                return false;
            }
            // const vm = this;
            const eventLength = currentEvent.length;
            if (count <= eventLength) {
                currentEvent[count - 1]();
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
            this.$store.commit("setTalkerName", "");
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
            this.$store.commit("setSelectMsg", {
                flag: true,
                option1: event.options[0],
                option2: event.options[1]
            });
            // this.$store.commit("setChoice1", event.choice[0]);
            // this.$store.commit("setChoice2", event.choice[1]);
            // this.isShowChoice = true;
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
                char = this.npcList[name];
            } else {
                char = { name: "", imgL: "", imgR: "" };
            }
            switch (pos.toUpperCase()) {
                case "L1":
                    this.$store.commit("setCharImgL1", char.imgL);
                    break;
                case "L2":
                    this.$store.commit("setCharImgL2", char.imgL);
                    break;
                case "C":
                    this.$store.commit("setCharImgC", char.imgL);
                    break;
                case "R1":
                    this.$store.commit("setCharImgR1", char.imgR);
                    break;
                case "R2":
                    this.$store.commit("setCharImgR2", char.imgR);
                    break;
            }
        },
        setTalker: function(name, pos) {
            this.downOpacity();
            this.$store.commit("setTalkerName", name);
            switch (pos.toUpperCase()) {
                case "L1":
                    this.$store.commit("setOpacityL1", 1);
                    this.$store.commit("setZIndexL1", 20);
                    break;
                case "L2":
                    this.$store.commit("setOpacityL2", 1);
                    this.$store.commit("setZIndexL2", 20);
                    break;
                case "C":
                    this.$store.commit("setOpacityC", 1);
                    this.$store.commit("setZIndexC", 20);
                    break;
                case "R1":
                    this.$store.commit("setOpacityR1", 1);
                    this.$store.commit("setZIndexR1", 20);
                    break;
                case "R2":
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
        // setMotion(target, effect) {
        //     switch (target.upperCase()) {
        //         case "L1":
        //             this.$store.commit("setMotionL1", {
        //                 flag: true,
        //                 type: effect
        //             });
        //             break;
        //         case "L2":
        //             this.$store.commit("setMotionL2", {
        //                 flag: true,
        //                 type: effect
        //             });
        //             break;
        //         case "C":
        //             this.$store.commit("setMotionC", {
        //                 flag: true,
        //                 type: effect
        //             });
        //             break;
        //         case "R1":
        //             this.$store.commit("setMotionR1", {
        //                 flag: true,
        //                 type: effect
        //             });
        //             break;
        //         case "R2":
        //             this.$store.commit("setMotionR2", {
        //                 flag: true,
        //                 type: effect
        //             });
        //             break;
        //         default:
        //             console.log("default");
        //     }
        // },

        setEffect(target, effect) {
            // this.activeEffect[target]["type"] = effect;
            const effectClass = this.selectEffectClass(effect);
            switch (target.toUpperCase()) {
                case "C":
                    this.$store.commit("setEffectC", effectClass);
                    break;
                case "L1":
                    this.$store.commit("setEffectL1", effectClass);
                    break;
                case "L2":
                    this.$store.commit("setEffectL2", effectClass);
                    break;
                case "R1":
                    this.$store.commit("setEffectR1", effectClass);
                    break;
                case "R2":
                    this.$store.commit("setEffectR2", effectClass);
                    break;
            }
        },
        selectEffectClass: function(motion) {
            switch (motion) {
                case "happy":
                    return "far fa-laugh-beam happy";
                case "heart":
                    return "fas fa-heart heart";
                case "angry":
                    return "fas fa-compress angry";
                case "sweat":
                    return "fas fa-tint sweat";
                case "surprise":
                    return "fas fa-exclamation surprise";
                case "death":
                    return "fas fa-skull-crossbones death";
                default:
                    return "none";
            }
        },
        resetEffect: function() {
            this.$store.commit("setEffectC", "");
            this.$store.commit("setEffectL1", "");
            this.$store.commit("setEffectL2", "");
            this.$store.commit("setEffectR1", "");
            this.$store.commit("setEffectR2", "");
        },
        setMotion: function(target, motion) {
            switch (target.toUpperCase()) {
                case "C":
                    this.$store.commit("setMotionC", motion);
                    break;
                case "L1":
                    this.$store.commit("setMotionL1", motion);
                    break;
                case "L2":
                    this.$store.commit("setMotionL2", motion);
                    break;
                case "R1":
                    this.$store.commit("setMotionR1", motion);
                    break;
                case "R2":
                    this.$store.commit("setMotionR2", motion);
                    break;
            }
        },
        resetMotion() {
            this.$store.commit("setMotionL1", "");
            this.$store.commit("setMotionL2", "");
            this.$store.commit("setMotionC", "");
            this.$store.commit("setMotionR1", "");
            this.$store.commit("setMotionR2", "");
        },
        resetEventObj: function() {
            this.$store.commit("setEventObj", "eventObj");
            this.$store.commit("setSceneCount", 0);
        },
        initEvent: function() {
            this.resetEventObj();
            this.resetMotion();
            this.resetEffect();
            this.clearChar();
            this.resetOpacity();
        }
    }
};
