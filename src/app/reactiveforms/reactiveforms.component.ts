import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit{

  form!: FormGroup
  ngOnInit(): void{
    this.form=new FormGroup({
      personalDetails: new FormGroup({
        username:new FormControl(null, [Validators.required]),
        email:new FormControl(null, [Validators.required, Validators.email]),
        phone:new FormControl(null, [Validators.required]),
      }),
      postiton:new FormControl('Default',[Validators.required]),
      message:new FormControl(null, [Validators.required]),

    })

  }
submitData(){
  console.log(this.form);
  

}

}
