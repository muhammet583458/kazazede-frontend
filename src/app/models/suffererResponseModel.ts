import { ResponseModel } from "./responseModel";
import { Sufferer } from "./sufferer";

export interface SuffererResponseModel extends ResponseModel{
    data:Sufferer[];
}