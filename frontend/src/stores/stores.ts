import {defineStore} from 'pinia'
import axios, {type AxiosInstance} from "axios";

interface User {
    name: string|null,
    email: string|null,
    phone: string|null
}

interface Store {
    authorized: boolean,
    token: string,
    user: User,
    apiInstance: AxiosInstance|null
}

export const store = defineStore("store", {
    state:() :Store => {
        return {
            authorized: false,
            token: '',
            apiInstance: null,
            user: {
                name: '',
                email: '',
                phone: ''
            }
        }
    },
    getters: {
        isAuthorized(): boolean
        {
            return this.authorized;
        }
    },
    actions: {}
});


