import { District } from './district';
import { ResponseModel } from './responseModel';

export interface DistrictResponseModel extends ResponseModel {
  data: District[];
}
