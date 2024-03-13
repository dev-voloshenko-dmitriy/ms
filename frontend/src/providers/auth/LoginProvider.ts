import { BaseApiProvider } from "@/providers/api/BaseApiProvider";
import type { AxiosInstance } from "axios";


export class LoginProvider extends BaseApiProvider {
    public login(email: string, password: string) {
        this.apiInstance?.post('/login', { email: email, password: password })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}