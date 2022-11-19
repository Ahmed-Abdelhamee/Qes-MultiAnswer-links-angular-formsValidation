import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { RegistComponent } from './regist/regist.component';
// import { LoginComponent } from './login/login.component';
// import { MylinksComponent } from './mylinks/mylinks.component'
import { AngularFireModule } from '@angular/fire';
// import { TestModule } from './test/test.module';
import { HttpClient, HttpClientModule} from "@angular/common/http";
import { RtlComponent } from './rtl/rtl.component';
import { TranslateModule ,TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { FileuploadComponent } from './fileupload/fileupload.component';
import { AngularFireStorage } from '@angular/fire/storage';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    RegistComponent,
    RtlComponent,
    FileuploadComponent,
    // LoginComponent,
    // MylinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // TestModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader:{
        provide:TranslateLoader,
        useFactory:TranslateData,
        deps:[HttpClient]
      }
    }),

    // the initializeApp data is from [ porto ] project on firebase
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC_DaHW0QM_ziR9BrUpiL2dfFlh80zmGQk",
      authDomain: "porto-204a6.firebaseapp.com",
      projectId: "porto-204a6",
      storageBucket: "porto-204a6.appspot.com",
      messagingSenderId: "972251411590",
      appId: "1:972251411590:web:4d1962ee71b1a099754d07",
      measurementId: "G-J2LBBFPMYB"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

} ) 

export class AppModule { }

export function TranslateData(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}
