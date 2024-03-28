import { BaseApiProvider } from "@/providers/api/BaseApiProvider";
import { AuthResponseProvider } from "./AuthResponseProvider";
import type { AxiosError, AxiosResponse } from "axios";
import type {FormLoginState} from "@/formInterface/formLogin/FormLoginState";


export class LoginProvider extends BaseApiProvider {

    public async login(formData: FormLoginState): Promise<AuthResponseProvider> {
        let response: AuthResponseProvider;

        response = await this.apiInstance.post('/login', { email: formData.email, password: formData.password })
            .then(function (AxiosResponse:AxiosResponse) {
                return new AuthResponseProvider(AxiosResponse?.status, AxiosResponse.statusText, {token: AxiosResponse.data.tokin, messages: []});
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
                
                return new AuthResponseProvider(error.response?.status, error.response?.statusText , {token: '', messages: messages});
            });
        
        if(response !== undefined) {
            return response;
        }

        return new AuthResponseProvider(undefined, undefined, {token: '', messages: ['Произошла не предвиденная ошибка']});
    }

}