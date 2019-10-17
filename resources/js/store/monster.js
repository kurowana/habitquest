const state = {
    monster: {
        name: "",
        hp: 0,
        mp: 0,
        atk: 0,
        matk: 0,
        def: 0,
        mdef: 0,
        spd: 0,
        hit: 0,
        flee: 0
    },
    monsterList: [
        {
            name: "ハーピー",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m001a.png"
        },
        {
            name: "熟れハーピー",
            hp: 60,
            mp: 0,
            atk: 14,
            matk: 0,
            def: 8,
            mdef: 0,
            spd: 20,
            hit: 20,
            flee: 20,
            img: "img/monster/m001b.png"
        },
        {
            name: "パリピーピー",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m001c.png"
        },
        {
            name: "ハンマーヘッド",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m004a.png"
        },
        {
            name: "エラツキヘッド",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m004b.png"
        },
        {
            name: "火毛ボーボー",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m004c.png"
        },
        {
            name: "ラムダ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m005a.png"
        },
        {
            name: "ソユーズ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m005b.png"
        },
        {
            name: "トップゴールド",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m005c.png"
        },
        {
            name: "シザーズ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m006a.png"
        },
        {
            name: "ちょい出シザーズ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m006b.png"
        },
        {
            name: "丸出シザーズ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m006c.png"
        },
        {
            name: "ピンクヘッド",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m007a.png"
        },
        {
            name: "ピンクヘッド(発情)",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m007b.png"
        },
        {
            name: "ピンクヘッド(昇天)",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m007c.png"
        },
        {
            name: "叫び",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m008a.png"
        },
        {
            name: "絶叫",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m008b.png"
        },
        {
            name: "ひとりコーラス",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m008c.png"
        },
        {
            name: "ダクソ",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m009a.png"
        },
        {
            name: "ダクソII",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m009b.png"
        },
        {
            name: "ダクソIII",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m009c.png"
        }
    ],
    bossList: {
        グリフォン1: {
            name: "グリフォン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m002a.png"
        },
        グリフォン2: {
            name: "グリフォン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m002b.png"
        },
        グリフォン3: {
            name: "グリフォン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m002c.png"
        },
        ナイトメア1: {
            name: "ナイトメア",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m003a.png"
        },
        ナイトメア2: {
            name: "ナイトメア",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m003b.png"
        },
        ナイトメア3: {
            name: "ナイトメア",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m003c.png"
        },
        ドラゴン1: {
            name: "ドラゴン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m010a.png"
        },
        ドラゴン2: {
            name: "ドラゴン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m010b.png"
        },
        ドラゴン3: {
            name: "ドラゴン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m010c.png"
        },
        スレイプニル1: {
            name: "スレイプニル",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m011a.png"
        },
        スレイプニル2: {
            name: "スレイプニル",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m011b.png"
        },
        スレイプニル3: {
            name: "スレイプニル",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m011c.png"
        },
        リヴァイアサン1: {
            name: "リヴァイアサン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m012a.png"
        },
        リヴァイアサン2: {
            name: "リヴァイアサン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m012b.png"
        },
        リヴァイアサン3: {
            name: "リヴァイアサン",
            hp: 50,
            mp: 0,
            atk: 10,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 20,
            flee: 20,
            img: "img/monster/m012c.png"
        }
    }
};
const getters = {
    getMonster: state => {
        return state.monster;
    }
};
const mutations = {
    setMonster(state, stage) {
        const range = state.monsterList.length;
        const randomNum = Math.floor(Math.random() * range);

        state.monster = Object.assign({}, state.monsterList[randomNum]);

        const correction = 1 + stage * 0.1;
        state.monster.hp = Math.floor(state.monster.hp * correction);
        state.monster.mp = Math.floor(state.monster.mp * correction);
        state.monster.atk = Math.floor(state.monster.atk * correction);
        state.monster.matk = Math.floor(state.monster.matk * correction);
        state.monster.def = Math.floor(state.monster.def * correction);
        state.monster.mdef = Math.floor(state.monster.mdef * correction);
        state.monster.spd = Math.floor(state.monster.spd * correction);
        state.monster.hit = Math.floor(state.monster.hit * correction);
        state.monster.flee = Math.floor(state.monster.flee * correction);
    }
};

export default {
    state,
    getters,
    mutations
};
