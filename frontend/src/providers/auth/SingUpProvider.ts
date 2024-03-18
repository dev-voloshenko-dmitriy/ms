import { BaseApiProvider } from "@/providers/api/BaseApiProvider";
import { AuthResponseProvider } from "./AuthResponseProvider";
import type { AxiosError, AxiosResponse } from "axios";
import type {FormSingUPState} from "@/formInterface/formSingUp/FormSingUPState";


export class SingUpProvider extends BaseApiProvider {
    public async singUp(formDate:FormSingUPState): Promise<AuthResponseProvider> {
        let response: AuthResponseProvider;

        response = await this.apiInstance.post('/signup', formDate)
            .then(function (AxiosResponse:AxiosResponse) {
                return new AuthResponseProvider(AxiosResponse?.status, AxiosResponse.statusText, {tokin: AxiosResponse.data.tokin, messages: []});
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


                return new AuthResponseProvider(error.response?.status, error.response?.statusText , {tokin: '', messages: messages});
            });

        if(response !== undefined) {
            return response;
        }

        return new AuthResponseProvider(undefined, undefined, {tokin: '', messages: ['Произошла не предвиденная ошибка']});
    }
}