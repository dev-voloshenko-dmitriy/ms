import type { ResponseProvider } from "../api/ResponseProvider";

interface LoginData {
    tokin:string,
    messages: Array<string>|null
}


export class LoginResponseProvider implements ResponseProvider
{
    constructor(
        public status:number|undefined,
        public code:string|undefined,
        public data:LoginData
    ){}
}