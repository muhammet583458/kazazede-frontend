import { City } from './city';
import { ResponseModel } from './responseModel';

export interface CityResponseModel extends ResponseModel {
  data: City[];
}
