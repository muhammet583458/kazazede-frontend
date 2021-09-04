import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sufferer } from 'src/app/models/sufferer';
import { SuffererService } from 'src/app/services/sufferer.service';

@Component({
  selector: 'app-sufferer-detail',
  templateUrl: './sufferer-detail.component.html',
  styleUrls: ['./sufferer-detail.component.css']
})
export class SuffererDetailComponent implements OnInit {
  sufferers:Sufferer[]=[];
  isFounder:boolean=false;
  constructor(private suffererService: SuffererService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if(params["id"]){
        this.getSuffererDetail(params["id"]);
      }
    })
    
  }
  getSuffererDetail(id:number){
    this.suffererService.getSufferersById(id).subscribe((response)=>{
    this.sufferers=response.data;
    if(this.sufferers[0].founder!=null){
      this.isFounder=true;
    }
    console.log(this.sufferers);
    })
  }
}
