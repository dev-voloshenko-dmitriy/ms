import type {ApiProvider} from "@/providers/api/ApiProvider";
import type {AxiosInstance} from "axios";
import axios from "axios";

export abstract class BaseApiProvider implements ApiProvider {

    apiInstance: AxiosInstance;

    constructor() {
        this.apiInstance =  this.getApiInstance();
    }

    getApiInstance(): AxiosInstance
    {
        return axios.create({
                baseURL: 'http://localhost:8181/api/',
                timeout: 14000,
                headers: {'Content-Type': 'application/json'}
            });
    }
}