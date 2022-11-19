import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MylinksComponent } from '../mylinks/mylinks.component';

const routes: Routes = [
  {path:"",component:MylinksComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,
  FormsModule]
})
export class TestRoutingModule { }
