import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  constructor(  private formbuilder:FormBuilder, private title:Title,private storage:AngularFireStorage) { }

  ngOnInit(): void {
  }

  task:AngularFireUploadTask;
  ref:AngularFireStorageReference;

  addphoto:any={
    title:"",
    photourl:""
  };

  url:any;

  upload(event){
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload= (load)=>{
      this.url=load.target.result;
    }
  }

  uploadFirebase(event){

    const id=Math.random().toString(36).substring(2)
    this.ref=this.storage.ref(id);
    this.task=this.ref.put(event.target.files[0])
    this.task.then(data=>{
      data.ref.getDownloadURL().then( url => {
        this.addphoto.photourl=url;
      })
      
    })
}
}
