import type {ApiProvider} from "@/providers/api/ApiProvider";
import type {AxiosInstance} from "axios";
import axios from "axios";

export abstract class BaseApiProvider implements ApiProvider {

    apiInstance: AxiosInstance|null = null

    constructor() {
        this.getApiInstance();
    }

    getApiInstance(): AxiosInstance
    {
        if(this.apiInstance === null) {
            this.apiInstance = axios.create({
                baseURL: 'backend/api/',
                timeout: 1000,
                headers: {'Content-Type': 'application/json'}
            });
        }


        return this.apiInstance;
    }
}