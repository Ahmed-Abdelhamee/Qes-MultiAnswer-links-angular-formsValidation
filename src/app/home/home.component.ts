import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  theForm:any;

  constructor(private formbuild:FormBuilder,public translate:TranslateService) {
    this.theForm=formbuild.group({
      fname:["",Validators.required]
    })
   }

  theFristShow=true;

  done=false;
  err=false;
  
  counter:number=0;// variable as index in the array ;

  inputIdNum=0;

  answers:string[]=["default"]; // array for saving answers 

  Ques_num=1; // to identify which question 
  
  div="Qes1"; // for identify which div will we create the [button and inputs] inside it

  
//the [setup function] called ones when the program starts  and  it creates [buttons & inputs] inside the divs 
  ngOnInit(): void {
    if(this.theFristShow){
      document.getElementById("Qes2").style.display="none";
      document.getElementById("Qes3").style.display="none";
      document.getElementById("Qes4").style.display="none";
      document.getElementById("Qes5").style.display="none";
      document.getElementById("Qes6").style.display="none";
      document.getElementById("Qes7").style.display="none";
      document.getElementById("Qes8").style.display="none";
      document.getElementById("Qes9").style.display="none";
      document.getElementById("Qes10").style.display="none";
      document.getElementById("submit").style.display="none";
    }

    //code for create new input and button
    ++this.inputIdNum;
    const getDiv=document.getElementById(this.div);

    //code create new input 
    const newinput=document.createElement("input");
    newinput.id=`id${this.inputIdNum}`;
    newinput.placeholder="enter answer";
    newinput.className="form-control";//class bootstrap
    newinput.style.marginBottom="20px";

    //code create new button 
    const btn=document.createElement("button");
    btn.className="btn btn-danger";
    btn.classList.add("btnStyle");
    btn.textContent="add new answer";
    btn.type="button";

    getDiv.appendChild(newinput);
    getDiv.appendChild(btn);  

    //code to add the input value inside the array 
    newinput.addEventListener("keyup",(event)=>{
      this.answers[this.counter]=newinput.value+`__Answer_Q${this.Ques_num}`;
      console.log(newinput.value);
      // console.log(event.target)
    })

// this is the event for adding new dynamically => [button and input] by recall addNewInput() function
    btn.addEventListener("click",(event)=>{
      this.ngOnInit()
      // console.log(this.counter)
      // console.log(this.answers)

      //remove the current btn & newinput
      btn.remove();
      // newinput.remove();
      newinput.disabled=true; //disable the current input
    })
    ++this.counter;//as index in the array ;
  
  }

//function for [identify the Ques_div]
  nextQues(){
    if(this.Ques_num<11){

      this.Ques_num++;
      this.theFristShow=false;
      // hide all questions in the view fristly
      document.getElementById("Qes1").style.display="none";
      document.getElementById("Qes2").style.display="none";
      document.getElementById("Qes3").style.display="none";
      document.getElementById("Qes4").style.display="none";
      document.getElementById("Qes5").style.display="none";
      document.getElementById("Qes6").style.display="none";
      document.getElementById("Qes7").style.display="none";
      document.getElementById("Qes8").style.display="none";
      document.getElementById("Qes9").style.display="none";
      document.getElementById("Qes10").style.display="none";
      document.getElementById("submit").style.display="none";

//check which question will be shown & which div will the [buttons & inputs] be created inside it
      switch(this.Ques_num){
        case 2:{document.getElementById("Qes2").style.display="block"; this.div="Qes2"; this.ngOnInit()};
        break;
        case 3:{document.getElementById("Qes3").style.display="block"; this.div="Qes3"; this.ngOnInit()};
        break;
        case 4:{document.getElementById("Qes4").style.display="block"; this.div="Qes4"; this.ngOnInit()};
        break;
        case 5:{document.getElementById("Qes5").style.display="block"; this.div="Qes5"; this.ngOnInit()};
        break;
        case 6:{document.getElementById("Qes6").style.display="block"; this.div="Qes6"; this.ngOnInit()};
        break;
        case 7:{document.getElementById("Qes7").style.display="block"; this.div="Qes7"; this.ngOnInit()};
        break;
        case 8:{document.getElementById("Qes8").style.display="block"; this.div="Qes8"; this.ngOnInit()};
        break;
        case 9:{document.getElementById("Qes9").style.display="block"; this.div="Qes9"; this.ngOnInit()};
        break;
        case 10:{
          // the last question 
          document.getElementById("Qes10").style.display="block";
          this.div="Qes10";
          this.ngOnInit();
          document.getElementById("nextQues").style.display="none";
          document.getElementById("submit").style.display="block";
          };
        break;

      }

    }

  }

  submit(f){
    console.log(this.answers);
    this.done=true;

  }
    

  // Example for adding photo in the html dynamically
  // MedoDiv="<div class='medo'> <h1> hello medo</h1> <div>";
  //
  // do(){
  //   // my notes
  //   // const x=document.getElementsByClassName("one")[0];
  //   // document.getElementsByClassName("one")[0].appendChild(y);
  //   const x=document.getElementById("one");
  //   const y=document.createElement("img");
  //   y.src="assets/player.jpg";
  //     x.appendChild(y)
  //   }
  
  }
