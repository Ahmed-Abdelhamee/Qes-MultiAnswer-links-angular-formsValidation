import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { MylinksComponent } from './mylinks/mylinks.component';
import { RegistComponent } from './regist/regist.component';
import { RtlComponent } from './rtl/rtl.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"chat",component:ChatComponent},
  {path:"regist",component:RegistComponent},
  {path:"rtl",component:RtlComponent},
  // {path:"login",component:LoginComponent},
  // {path:"mylinks",component:MylinksComponent}
  // {path:"mylinks",loadChildren:"./links/links.module#LinksModule"}
  {path:"fileupload",component:FileuploadComponent},





  {path:"mylinks" , loadChildren: () => import("./test/test.module").then(m => m.TestModule)},
  {path:"login" , loadChildren: () => import("./login/login.module").then(m => m.LoginModule)},
  // {path:"login" , loadChildren: () => import("./asd/asd.module").then(m => m.AsdModule)},
  // {path:"mylinks" ,loadChildren:"./test/test.module#TestModule"}
  // {path:"login" ,component:LoginComponent}
  // {path:"login" ,loadChildren:"./test/test.module#LoginnModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
