import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Server } from 'http';
import { EnrollService } from 'src/enroll.service';
import { GetdataService } from '../getdata.service';
import { user } from '../user.interface';
import { passcheck } from '../validators/passcheck.validator';
import { testName } from '../validators/testName.validatos';


@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.scss']
})
export class RegistComponent implements OnInit {

  constructor( private empsService:GetdataService , private enrollService:EnrollService, private fb:FormBuilder) { }
  
  empsdata:any;

  userObject:user;


  // --------------------------- using formGroub ----------------------------

  // myregistrationForm=new FormGroup({
  //   name:new FormControl(''),
  //   email: new FormControl(''),
  //   phone:new FormControl('')
  // })



  // ----------------------------- using formBuilder ---------------------------

  myregistrationForm= this.fb.group({
    name:["",[Validators.required, testName(/super admin/),testName(/admin/)]],
    // email: [" ",[Validators.email,Validators.required,testName(/admin/)]],
    email:[""],
    password:["",Validators.required],
    confirmpassword:["",Validators.required],
    phone:new FormControl(''),
    checkbox:[false],
    addEmail:this.fb.array([])

  },{validators:[passcheck]})
  
  
  //to get the name from the form groub to use it in html
  get getname(){
    return this.myregistrationForm.get("name");
  }
  get email(){
    return this.myregistrationForm.get('email')
  }
  get addEmail(){
    return this.myregistrationForm.get('addEmail') as FormArray
  }

  addnewEmail(){
    this.addEmail.push(this.fb.control(''))
  }

  setrequired(){
    this.myregistrationForm.get('checkbox').valueChanges.subscribe(checkvalue=>{
      const email=this.myregistrationForm.get("email")
      
      if(checkvalue){
        email?.setValidators(Validators.required)
      }else{
        email?.clearValidators()
      }
      email.updateValueAndValidity()
    })

  }


  ngOnInit(): void {
    this.empsService.getData().subscribe(data=>{
      this.empsdata=data
    })
  }

  submit(f){
  }

  setdata(){
    this.myregistrationForm.patchValue({
      name:"asd",
      phone:"asd"
    })
  }
  
  usersubmit(f){
    console.log(f.value)
  }

  // submit(F){
      // // code for sending data on server node [Server.js]
      // this.userObject=F.value;
      // this.enrollService.enroll(this.userObject).subscribe(
      //   msg=>{console.log("success",msg)},
      //    errorr=>{console.log(errorr)}
      //    )
  // }

}
