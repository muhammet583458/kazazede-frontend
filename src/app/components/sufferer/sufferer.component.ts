import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sufferer } from 'src/app/models/sufferer';
import { SuffererService } from 'src/app/services/sufferer.service';
import { Reporter } from 'src/app/models/reporter';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-sufferer',
  templateUrl: './sufferer.component.html',
  styleUrls: ['./sufferer.component.css'],
})
export class SuffererComponent implements OnInit {
  sufferers: Sufferer[] = [];
  currentSufferer:Sufferer;
  constructor(private suffererService: SuffererService,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["cityId"]){
        this.getSufferersByCity(params["cityId"]);
      }
      else if(params["districtId"]){
        this.getSufferersByDistrict(params["districtId"]);
      }
      else{
        this.getSufferers();
      }
    })
    
  }

  getSufferers() {
    this.suffererService.getSufferers().subscribe((response)=>{
      this.sufferers=response.data;
    })
  }
  getSufferersByCity(cityId:number) {
    this.suffererService.getSufferersByCity(cityId).subscribe((response)=>{
      this.sufferers=response.data;
    })
  }
  getSufferersByDistrict(districtId:number) {
    this.suffererService.getSufferersByDistrict(districtId).subscribe((response)=>{
      this.sufferers=response.data;
    })
  }
}
