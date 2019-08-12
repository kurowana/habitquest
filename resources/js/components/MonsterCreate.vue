<template>
    <div>
        <h2>モンスター登録</h2>
        <div>モンスター名：<input type="text" v-model="name"></div>
        <div>HP：<input type="text" v-model="hp"></div>
        <div>MP：<input type="text" v-model="mp"></div>
        <div>ATK：<input type="text" v-model="atk"></div>
        <div>MATK：<input type="text" v-model="matk"></div>
        <div>DEF：<input type="text" v-model="def"></div>
        <div>MDEF：<input type="text" v-model="mdef"></div>
        <div>SPD：<input type="text" v-model="spd"></div>
        <div>HIT：<input type="text" v-model="hit"></div>
        <div>FLEE：<input type="text" v-model="flee"></div>
        <button @click="addMonster">モンスター登録</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data:function(){
        return{
            name:'',
            hp:'',
            mp:'',
            atk:'',
            matk:'',
            def:'',
            mdef:'',
            spd:'',
            hit:'',
            flee:'',
        }
    },
    methods:{
        addMonster:function(){
            axios.post('api/add_monster',{
                name:this.name,
                hp:this.hp,
                mp:this.mp,
                atk:this.atk,
                matk:this.matk,
                def:this.def,
                mdef:this.mdef,
                spd:this.spd,
                hit:this.hit,
                flee:this.flee,
            }).then((res)=>{
                location.reload();
            })
        }
    }
}
</script>
