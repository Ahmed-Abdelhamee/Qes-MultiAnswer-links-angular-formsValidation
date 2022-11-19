import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators,FormControl ,FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import * as $ from 'jquery';
import Swal from 'sweetalert2';
import { GetdataService } from '../getdata.service';
import { logindata } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private route:Router , private fb:FormBuilder 
              , private servic:GetdataService,private http:HttpClient) { }

  @ViewChild ('data') form:NgForm;

  userLogin=this.fb.group({
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]]

  })

  users=this.fb.group({})
  // an array for show and control the data on server
  logindata:logindata[]=[];
  // local data file array
  localdata:any[]=[]

  currentId:string;

  editMode:boolean=false;


  ngOnInit(): void {

    // this.servic.getlocaldata().subscribe(data=>{
    //   this.localdata=data
    // })

    this.servic.getdataServer().subscribe(data =>{
      // the data is an array of objects
      // console.log(data)

      for(let i in data){
        this.logindata.push({id:i, email:data[i].email, pass:data[i].pass})
        // this.logindata.push(i)
        
        // to get the index => like the id of each object inside the array
        // console.log(i)
        // to get the value of each object inside the array
        // console.log(data[i])
      }
      // console.log(this.logindata)

    })
    AOS.init();
  }


  // function for posting data to the server
  setData(data){

    if(!this.editMode){
      console.log(data.value)

      this.servic.postData(data.value)// you can write the subscribe() data here
      // this line to add the object entered immediately to the login array instead of reload the page to show the data
        this.logindata.push(data.value)

    }else{
      this.servic.updateDataServer(this.currentId,data.value);
    }

  }

  // deleting specific item from server in database_file.json
  deleteItem(id:string){
    this.http.delete(`https://porto-204a6-default-rtdb.firebaseio.com/data/${id}.json`).subscribe( );

  }
  // deleting all items from server in database_file.json
  deleteAll(){
    this.http.delete(`https://porto-204a6-default-rtdb.firebaseio.com/data.json`).subscribe();
  }


  deletelocalItem(id){
    this.http.delete(`assets/data/emploees.json`)
  }

  updateData(id){

    this.currentId=id;

    let currentdata = this.logindata.find((key)=> {return key.id===id})

    this.form.setValue({
      email:currentdata.email,
      pass:currentdata.pass
    })

    this.editMode=true;
  }



  //deal with form group data

  // get email(){
  //   return this.userLogin.get('email')
  // }
  // get pass(){
  //   return this.userLogin.get('password')
  // }

  // the on submit function
  // getData(data){
  //   console.log(data.value);

    // check input validate
    // if(data.valid){
    //   console.log(data.value);
    //   this.successAlert()
    // }else{
    //   this.erroralert()
    // }
  // }


//success alert code for true --------
  // successAlert(){

  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     title: 'Login Successfully , Welcome Sir',
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //     },
  //   }).then((result)=>{
  //     if(result.isConfirmed){
  //       this.route.navigate(["/"])
  //     }
  //   })
  // }
//------------------------------------

  // error alert code for false------
  // erroralert(){

  //   Swal.fire({
  //     position: 'center',
  //     icon: 'error',
  //     title: 'please enter valid data',
  //     showConfirmButton: false,
  //     showCancelButton:true,
  //     cancelButtonText:"OK",
  //     confirmButtonColor:"btn btn-danger ",
  //     customClass:{
  //       cancelButton:"btn btn-danger"
  //     }
  //   })
  // }
  //---------------------------------


}
