import { Reporter } from './reporter';
import { ResponseModel } from './responseModel';

export interface ReporterResponseModel extends ResponseModel {
  data: Reporter;
}
