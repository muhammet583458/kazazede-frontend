import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuffererComponent } from './components/sufferer/sufferer.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:SuffererComponent},
  {path:"sufferers",pathMatch:"full",component:SuffererComponent},
  {path:"sufferers/city/:cityId",pathMatch:"full",component:SuffererComponent},
  {path:"sufferers/city/0",pathMatch:"full",component:SuffererComponent},
  {path:"sufferers/district/:districtId",pathMatch:"full",component:SuffererComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
