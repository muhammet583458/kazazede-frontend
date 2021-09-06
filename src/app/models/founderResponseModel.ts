import { Founder } from './founder';
import { ResponseModel } from './responseModel';

export interface FounderResponseModel extends ResponseModel {
  data: Founder;
}
