import {defineStore} from 'pinia'
import {useCookies} from 'vue3-cookies';

interface User {
    name: string | null,
    email: string | null,
    phone: string | null
}

interface StoreApp {
    authorized: boolean,
    token: string,
    user: User,
}

const {cookies} = useCookies();

export const storeApp = defineStore("store", {
    state: (): StoreApp => {
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
        isAuthorized(): boolean {
            this.updateConditionStore

            return this.authorized;
        },
        getTokin(): string {
            this.updateConditionStore

            return this.token;
        },
        updateConditionStore(): void {
            if (cookies.isKey('auth')) {
                this.token = cookies.get('auth');
                this.authorized = true;
            }
        }
    },
    actions: {
        saveAuthorizationData(tokin: string): void {
            this.authorized = true;
            this.token = tokin;
            cookies.set('auth', tokin);
        },
        updateСonditionStore(): void {

        }
    }
});


