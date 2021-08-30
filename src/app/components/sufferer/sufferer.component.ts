import { Component, OnInit } from '@angular/core';
import { Sufferer } from 'src/app/models/sufferer';
import { SuffererService } from 'src/app/services/sufferer.service';

@Component({
  selector: 'app-sufferer',
  templateUrl: './sufferer.component.html',
  styleUrls: ['./sufferer.component.css'],
})
export class SuffererComponent implements OnInit {
  sufferers: Sufferer[] = [];
 
  constructor(private suffererService: SuffererService) {}

  ngOnInit(): void {
    this.getSufferers();
  }

  getSufferers() {
    this.suffererService.getSufferers().subscribe((response)=>{
      this.sufferers=response.data
    })
  }
}
