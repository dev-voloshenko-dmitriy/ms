import type { ResponseProvider } from "../api/ResponseProvider";
import type { AushData } from "@/providers/auth/AuthData";




export class AuthResponseProvider implements ResponseProvider
{
    constructor(
        public status:number|undefined,
        public code:string|undefined,
        public data: AushData
    ){}
}