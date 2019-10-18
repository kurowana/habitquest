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
            hp: 100,
            mp: 0,
            atk: 20,
            matk: 0,
            def: 10,
            mdef: 10,
            spd: 15,
            hit: 100,
            flee: 10,
            img: "img/monster/m001a.png"
        },
        {
            name: "熟れハーピー",
            hp: 150,
            mp: 0,
            atk: 30,
            matk: 0,
            def: 15,
            mdef: 15,
            spd: 25,
            hit: 110,
            flee: 20,
            img: "img/monster/m001b.png"
        },
        {
            name: "パリピーピー",
            hp: 200,
            mp: 0,
            atk: 45,
            matk: 0,
            def: 20,
            mdef: 20,
            spd: 40,
            hit: 120,
            flee: 30,
            img: "img/monster/m001c.png"
        },
        {
            name: "ハンマーヘッド",
            hp: 150,
            mp: 0,
            atk: 30,
            matk: 0,
            def: 5,
            mdef: 5,
            spd: 10,
            hit: 100,
            flee: 0,
            img: "img/monster/m004a.png"
        },
        {
            name: "エラツキヘッド",
            hp: 200,
            mp: 0,
            atk: 50,
            matk: 0,
            def: 10,
            mdef: 5,
            spd: 10,
            hit: 100,
            flee: 0,
            img: "img/monster/m004b.png"
        },
        {
            name: "火毛ボーボー",
            hp: 300,
            mp: 0,
            atk: 80,
            matk: 0,
            def: 10,
            mdef: 5,
            spd: 10,
            hit: 100,
            flee: 0,
            img: "img/monster/m004c.png"
        },
        {
            name: "ラムダ",
            hp: 80,
            mp: 30,
            atk: 10,
            matk: 30,
            def: 10,
            mdef: 25,
            spd: 10,
            hit: 100,
            flee: 10,
            img: "img/monster/m005a.png"
        },
        {
            name: "ソユーズ",
            hp: 120,
            mp: 50,
            atk: 20,
            matk: 50,
            def: 20,
            mdef: 40,
            spd: 20,
            hit: 100,
            flee: 15,
            img: "img/monster/m005b.png"
        },
        {
            name: "トップゴールド",
            hp: 160,
            mp: 80,
            atk: 30,
            matk: 80,
            def: 30,
            mdef: 60,
            spd: 30,
            hit: 100,
            flee: 20,
            img: "img/monster/m005c.png"
        },
        {
            name: "シザーズ",
            hp: 70,
            mp: 0,
            atk: 30,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 30,
            hit: 100,
            flee: 20,
            img: "img/monster/m006a.png"
        },
        {
            name: "ちょい出シザーズ",
            hp: 100,
            mp: 0,
            atk: 50,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 50,
            hit: 100,
            flee: 30,
            img: "img/monster/m006b.png"
        },
        {
            name: "丸出シザーズ",
            hp: 150,
            mp: 0,
            atk: 70,
            matk: 0,
            def: 0,
            mdef: 0,
            spd: 70,
            hit: 100,
            flee: 30,
            img: "img/monster/m006c.png"
        },
        {
            name: "ピンクヘッド",
            hp: 80,
            mp: 20,
            atk: 20,
            matk: 20,
            def: 20,
            mdef: 20,
            spd: 10,
            hit: 100,
            flee: 10,
            img: "img/monster/m007a.png"
        },
        {
            name: "ピンクヘッド(発情)",
            hp: 120,
            mp: 40,
            atk: 30,
            matk: 30,
            def: 30,
            mdef: 30,
            spd: 20,
            hit: 100,
            flee: 20,
            img: "img/monster/m007b.png"
        },
        {
            name: "ピンクヘッド(昇天)",
            hp: 180,
            mp: 60,
            atk: 50,
            matk: 50,
            def: 50,
            mdef: 50,
            spd: 30,
            hit: 100,
            flee: 25,
            img: "img/monster/m007c.png"
        },
        {
            name: "叫び",
            hp: 50,
            mp: 100,
            atk: 5,
            matk: 40,
            def: 0,
            mdef: 40,
            spd: 10,
            hit: 100,
            flee: 0,
            img: "img/monster/m008a.png"
        },
        {
            name: "絶叫",
            hp: 80,
            mp: 200,
            atk: 10,
            matk: 70,
            def: 0,
            mdef: 60,
            spd: 30,
            hit: 100,
            flee: 0,
            img: "img/monster/m008b.png"
        },
        {
            name: "ひとりコーラス",
            hp: 160,
            mp: 300,
            atk: 10,
            matk: 100,
            def: 0,
            mdef: 80,
            spd: 50,
            hit: 100,
            flee: 0,
            img: "img/monster/m008c.png"
        },
        {
            name: "ダクソ",
            hp: 100,
            mp: 30,
            atk: 40,
            matk: 40,
            def: 30,
            mdef: 30,
            spd: 30,
            hit: 100,
            flee: 10,
            img: "img/monster/m009a.png"
        },
        {
            name: "ダクソII",
            hp: 180,
            mp: 60,
            atk: 60,
            matk: 60,
            def: 50,
            mdef: 50,
            spd: 50,
            hit: 110,
            flee: 20,
            img: "img/monster/m009b.png"
        },
        {
            name: "ダクソIII",
            hp: 260,
            mp: 100,
            atk: 100,
            matk: 100,
            def: 80,
            mdef: 80,
            spd: 70,
            hit: 120,
            flee: 30,
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
