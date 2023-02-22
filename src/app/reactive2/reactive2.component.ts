import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive2',
  templateUrl: './reactive2.component.html',
  styleUrls: ['./reactive2.component.css']
})
export class Reactive2Component implements OnInit {

  reactiveform2!:FormGroup  // we have created a form


  ngOnInit(): void{
   this.reactiveform2=new FormGroup({ // initiating the variable of type form group above
      // define our controls or inputs

      // define your objects and give them the value of form control
    
      firstname:new FormControl(null,[Validators.required]),
      secondname:new FormControl(null, [Validators.required]),
      emailaddress:new FormControl(null,[Validators.required,Validators.email]),
      country:new FormControl('Sudan',[Validators.required]),
      gender:new FormControl(null,[Validators.required]),
      message:new FormControl(null,[Validators.required]),
      skills:new FormArray([
      
      ])
      
   });
  }
  submitData(){
    console.log(this.reactiveform2);
    
    
  }



}
