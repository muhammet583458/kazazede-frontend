import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/city';
import { District } from 'src/app/models/district';
import { CityService } from 'src/app/services/city.service';
import { DistrictService } from 'src/app/services/district.service';
import { Sufferer } from 'src/app/models/sufferer';
import { Reporter } from 'src/app/models/reporter';
import { SuffererService } from 'src/app/services/sufferer.service';
import { ReporterService } from 'src/app/services/reporter.service';
import { Observable } from 'rxjs';
import { ReporterResponseModel } from 'src/app/models/reporterResponseModel';

@Component({
  selector: 'app-sufferer-add',
  templateUrl: './sufferer-add.component.html',
  styleUrls: ['./sufferer-add.component.css']
})
export class SuffererAddComponent implements OnInit {
sufferer:Sufferer;
cities:City[]=[];
districts:District[]=[];
reporters:Reporter[]=[];
currentCity:City;
currentReporter:Reporter;
reporter:Reporter;
selectedDistrict:District;
selectedId:number;
suffererAddForm:FormGroup;
  constructor(private suffererService:SuffererService,private reporterService:ReporterService, private cityService:CityService,private districtService:DistrictService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createSuffererAddForm();
    this.getCities();
    this.getReporters();
  }

  getCities(){
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }
  getDistricts() {
    this.districtService.getByCityId(this.selectedId).subscribe((response)=>{
      this.districts=response.data;
      this.districts.forEach(d => {
        if(d.id==this.selectedId){
          this.selectedDistrict=d;
          this.currentCity=d.cityId;
        }        
      });
    })
  }
  getReporters(){
    this.reporterService.getReporters().subscribe((response) => {
      this.reporters = response.data;
    });
  }
  createSuffererAddForm(){
    this.suffererAddForm = this.formBuilder.group({
      reporterName:["",Validators.required],
      reporterLastName:["",Validators.required],
      reporterPhone:["",Validators.required],
      suffererName:["",Validators.required],
      suffererLastName:["",Validators.required],
      suffererAddress:["",Validators.required],
      suffererCity:["",Validators.required],
      suffererDistrict:["",Validators.required],
    });
  }
  addReporter(){
    this.sufferer=this.suffererAddForm.value;
    let out:Reporter={id:1,reporterLastName:"",reporterName:"",reporterPhone:""};
    const reporterModel:Reporter = {
      reporterName: this.suffererAddForm.value.reporterName, reporterLastName: this.suffererAddForm.value.reporterLastName, reporterPhone: this.suffererAddForm.value.reporterPhone,
      id: 0
    };
  
  this.reporterService.add(reporterModel).subscribe((data)=>{

    });
    
    

    this.getReporters();
  }
  submit(){
    this.addReporter();
    
    this.cities.forEach(element => {
      if(element.id==this.suffererAddForm.value.suffererCity){
        this.currentCity=element;
      }
    });
    this.districts.forEach(element => {
      if(element.id==this.suffererAddForm.value.suffererDistrict){
        this.selectedDistrict=element;
      }
    });
    this.reporters.forEach(element => {
      
      if(element.reporterPhone==this.suffererAddForm.value.reporterPhone){
        this.currentReporter=element;
      }
      
    });
    console.log(this.currentReporter);
    this.sufferer.city=this.currentCity;
    this.sufferer.district=this.selectedDistrict;
    
    this.sufferer.reporter=this.reporter;
    /*this.suffererService.add(this.sufferer).subscribe((data)=>{

    })*/
    
    
    
  }
  
}
