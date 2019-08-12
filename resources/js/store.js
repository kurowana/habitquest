import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =new Vuex.Store({
    state:{
        user_id:'',
        user:{},
        userSt:{
            maxhp:0,
            hp:0,
            maxmp:0,
            mp:0,
            atk:0,
            matk:0,
            def:0,
            mdef:0,
            spd:0,
            hit:0,
            flee:0,
        },
        monster:{},
    },
    getters:{
        getUserInfo:state=>{
            return state.user
        },
        getUserSt:state=>{
            return state.userSt
        },
        getHasHabit:state=>{
            return state.user.habit
        },
        getMonster:state=>{
            return state.monster
        },
    },
    mutations:{
        setHabit(state,habit){
            Vue.set(state.user.habit,{'habit_name':habit})
        },

    }
})
export default store


