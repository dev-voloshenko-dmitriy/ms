import { BaseApiProvider } from "@/providers/api/BaseApiProvider";
import { LoginResponseProvider } from "./LoginResponseProvider";
import type { ResponseProvider } from "../api/ResponseProvider";
import type { AxiosError, AxiosResponse } from "axios";
import type { ApiProvider } from "../api/ApiProvider";


export class LoginProvider extends BaseApiProvider  implements ApiProvider {

    public async login(email: string, password: string): Promise<LoginResponseProvider> {
        let response: LoginResponseProvider;

        response = await this.apiInstance.post('/login', { email: email, password: password })
            .then(function (AxiosResponse:AxiosResponse) {
                return new LoginResponseProvider(AxiosResponse?.status, AxiosResponse.statusText, {tokin: AxiosResponse.data.tokin, messages: []});
            })
            .catch(function (error:AxiosError) {
                let messagesAxiosError: any = error.response?.data;
                let messages: Array<string> = [];

                for(let item  in messagesAxiosError.details) {
                    let itemValue: any = messagesAxiosError.details[item][0];

                    if(itemValue != '') {
                        messages.push(itemValue);
                    }
                }
                

                return new LoginResponseProvider(error.response?.status, error.response?.statusText , {tokin: '', messages: messages});
            });
        
        if(response !== undefined) {
            return response;
        }

        return new LoginResponseProvider(undefined, undefined, {tokin: '', messages: ['Произошла не предвиденная ошибка']});
    }
}