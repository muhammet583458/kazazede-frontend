import { ResponseModel } from "./responseModel";
import { Sufferer } from "./sufferer";

export interface SufferersResponseModel extends ResponseModel{
    data:Sufferer[];
}