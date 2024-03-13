import {BaseApiProvider} from "@/providers/api/BaseApiProvider";
import type {AxiosInstance} from "axios";


class LoginProvider extends BaseApiProvider
{
    public login() {
        return this.apiInstance;
    }
}