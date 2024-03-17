import type {ApiProvider} from "@/providers/api/ApiProvider";
import type {AxiosInstance} from "axios";
import { storeApp } from "@/stores/stores";
import axios from "axios";

export abstract class BaseApiProvider implements ApiProvider {

    apiInstance: AxiosInstance;
    headers: any = {
        'Content-Type': 'application/json',
    };

    constructor() {
        this.apiInstance =  this.getApiInstance();
        const store = storeApp();
        
        if(store.isAuthorized) {
            this.headers['Authorization'] = "Bearer " + store.getTokin;
        }

    }

    getApiInstance(): AxiosInstance
    {
        return axios.create({
                baseURL: 'http://localhost:8181/api/',
                timeout: 14000,
                headers: this.headers
            });
    }
}