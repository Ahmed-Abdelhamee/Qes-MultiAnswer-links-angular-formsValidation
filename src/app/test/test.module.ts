import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { MylinksComponent } from '../mylinks/mylinks.component';


@NgModule({
  declarations: [
    MylinksComponent,
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
