import { City } from "./city";
import { District } from "./district";

export interface Sufferer{
    id:number;
    suffererName:string;
    suffererLastName:string;
    suffererAddress:string;
    suffererStatus:string;
    suffererCity:City;
    suffererDistrict:District;
    suffererReporter:number;
}