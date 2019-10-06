export default {
    created: function() {
        this.$store.commit("setBgImg", "");
    },
    methods: {
        //汎用スリープ処理。戦闘時の時間調整とかに。
        sleep: function(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },

        //axiosの通信処理でエラーをキャッチした時用
        apiDefaultError: function(error) {
            console.log(error);
            const result = confirm("ネットワークエラーです。更新しますか？");
            if (result) {
                location.reload();
            } else {
                return false;
            }
        }
    }
};
