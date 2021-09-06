import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Founder } from 'src/app/models/founder';
import { Sufferer } from 'src/app/models/sufferer';
import { FounderService } from 'src/app/services/founder.service';
import { SuffererService } from 'src/app/services/sufferer.service';

@Component({
  selector: 'app-sufferer-detail',
  templateUrl: './sufferer-detail.component.html',
  styleUrls: ['./sufferer-detail.component.css']
})
export class SuffererDetailComponent implements OnInit {
  sufferers:Sufferer[]=[];
  isFounder:boolean=false;
  isClicked:boolean=true;
  showForm:boolean=false;
  founderAddForm:FormGroup;
  founder:Founder;
  constructor(private suffererService: SuffererService,private activatedRoute:ActivatedRoute,private formBuilder:FormBuilder,private founderService:FounderService) { }

  ngOnInit(): void {
    this.createFounderAddForm();
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
  changeClicked(){
    this.isClicked=false;
    this.showForm=true;
  }
  createFounderAddForm(){
    this.founderAddForm = this.formBuilder.group({
      founderName:["",Validators.required],
      founderLastName:["",Validators.required],
      founderPhone:["",Validators.required]
    });
  }
  add(){
    if(this.founderAddForm.valid){
      let founderModel = Object.assign({},this.founderAddForm.value);
      this.sufferers[0].founder=founderModel;
      
      this.founderService.add(founderModel).subscribe((data)=>{

      });
      
      
      
      this.founderService.getByPhone(this.sufferers[0].founder.founderPhone).subscribe((response)=>{
        this.sufferers[0].founder=response.data;
        this.sufferers[0].suffererStatus="Bulundu";
        this.suffererService.add(this.sufferers[0]).subscribe((data)=>{
         
        })
      })
      window.location.reload();
      
    }
  
   
  }
}
