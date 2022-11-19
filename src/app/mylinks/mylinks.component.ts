import { Component, OnInit } from '@angular/core';
import { linkdata } from '../linkdata.interface';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormsModule }   from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-mylinks',
  templateUrl: './mylinks.component.html',
  styleUrls: ['./mylinks.component.scss']
})
export class MylinksComponent implements OnInit {

  constructor(private datastore:AngularFirestore,private fstorage:AngularFireStorage) { }

  task:AngularFireUploadTask;
  ref:AngularFireStorageReference;

  counter:number;
  photoURL:any;
  checkSuccess:boolean = false;
  checkfail:boolean = false;

  ngOnInit(): void {
  }

  siteData:any[]=[{sitename:"google",URL:"https://www.google.com",photo:"assets/search.png",target:"_blank"},
                {sitename:"facebook",URL:"https://www.facebook.com",photo:"assets/facebook.png",target:"_blank"}]
  // siteData:linkdata[]=[]
/**
 * 
 * @param input
 */
  addLink(input:any){
    let data =input.value;
    this.counter=this.siteData.length;
    if(data.site!="" && data.URL!=""){
      this.siteData[this.counter]={
        sitename:data.site,
        URL:data.URL,
        photo:this.photoURL,
        target:data.targetValue
      }
      console.log(this.siteData)
      this.counter++;
      this.checkSuccess=true;
      this.checkfail=false;
    }else{
      this.checkSuccess=false;
      this.checkfail=true;
    }

  }

  //for uplaoding imge and get url
  upladImage(event){
    const id=Math.random().toString(36).substring(2);
    this.ref=this.fstorage.ref(id);
    this.task=this.ref.put(event.target.files[0]);
    this.task.then((data)=>{
      data.ref.getDownloadURL().then(url=>{
       this.photoURL=url
      })
    })
    
  }


  showSweetalert(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )

        console.log("hello medo yes")
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
}
