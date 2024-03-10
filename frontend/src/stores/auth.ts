import axios from 'axios'
import router from '@/router'

export default {
    namespaced: true,
    state:{
        authenticated:false,
        user:{}
    },
    getters:{
        authenticated(state:any){
            return state.authenticated
        },
        user(state:any){
            return state.user
        }
    },
    mutations:{
        SET_AUTHENTICATED (state:any, value:any) {
            state.authenticated = value
        },
        SET_USER (state:any, value:any) {
            state.user = value
        }
    },
    actions:{
        login(commit:any){
            return axios.get('/api/user').then(({data})=>{
                commit('SET_USER',data)
                commit('SET_AUTHENTICATED',true)
                router.push({name:'dashboard'})
            }).catch(({response:{data}})=>{
                commit('SET_USER',{})
                commit('SET_AUTHENTICATED',false)
            })
        },
        logout(commit:any){
            commit('SET_USER',{})
            commit('SET_AUTHENTICATED',false)
        }
    }
}