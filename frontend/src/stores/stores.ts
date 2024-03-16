import {defineStore} from 'pinia'

interface User {
    name: string|null,
    email: string|null,
    phone: string|null
}

interface Store {
    authorized: boolean,
    token: string,
    user: User,
}

export const store = defineStore("store", {
    state:() :Store => {
        return {
            authorized: false,
            token: '',
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
    }
});


