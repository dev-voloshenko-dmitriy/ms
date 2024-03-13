import type {AxiosInstance} from "axios";

export interface ApiProvider {
    apiInstance: AxiosInstance|null

    getApiInstance(): AxiosInstance
}