import {defineStore} from 'pinia'
import { useCookies } from 'vue3-cookies';

interface User {
    name: string|null,
    email: string|null,
    phone: string|null
}

interface StoreApp {
    authorized: boolean,
    token: string,
    user: User,
}

const { cookies } = useCookies();

export const storeApp = defineStore("store", {
    state:() :StoreApp => {
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
        },
        getTokin(): string
        {
            if(this.authorized) {
                if(this.token !== '') {
                    return this.token
                } 

                this.token = cookies.get('auth');

                return this.token;
            }

            return "";
        }
    },
    actions: {
        saveAuthorizationData(tokin:string): void
        {
            this.authorized = true;
            this.token = tokin;
            cookies.set('auth', tokin);
        }
    }
});


