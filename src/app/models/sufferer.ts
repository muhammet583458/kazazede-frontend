import { City } from "./city";
import { District } from "./district";
import { Reporter } from "./reporter";

export interface Sufferer{
    id:number;
    suffererName:string;
    suffererLastName:string;
    suffererAddress:string;
    suffererStatus:string;
    city:City;
    district:District;
    reporter:Reporter;
}