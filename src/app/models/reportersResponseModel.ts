import { Reporter } from './reporter';
import { ResponseModel } from './responseModel';

export interface ReportersResponseModel extends ResponseModel {
  data: Reporter[];
}
