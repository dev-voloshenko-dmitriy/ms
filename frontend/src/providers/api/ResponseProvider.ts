import type {DTODataProvider} from "@/providers/api/DTODataProvider";

export interface ResponseProvider
{
   status:number|undefined,
   code:string|undefined,
   data: DTODataProvider
}