import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit{

  form!: FormGroup

  usernames=['janestern', 'wright', 'Anonymous', 'Test']

  // emails=['janestern@gmail.com', 'wright.@gmail.com', 'Anonymous.@gmail.com', 'Test.@gmail.com']

  ngOnInit(): void{
    this.form=new FormGroup({
      personalDetails: new FormGroup({
        username:new FormControl(null, [Validators.required, this.unallowedPersons.bind(this) ]),
        email:new FormControl(null, [Validators.required, Validators.email]),
        phone:new FormControl(null, [Validators.required]),
      }),
      position:new FormControl('Default',[Validators.required]),
      message:new FormControl(null, [Validators.required]),
      hobbies:new FormArray([])
    })


  }
submitData(){
  console.log(this.form);
}

addHobbies(){
  let control=new FormControl(null,[Validators.required]);
  (this.form.get('hobbies')as FormArray).push(control)
}
gethobbies(){
  return (this.form.get("hobbies") as FormArray).controls
}

removecontrol(i:number){
  (this.form.get("hobbies") as FormArray).removeAt(i)

}

unallowedPersons(control:FormControl): {[s:string]:boolean} | null{
  if(this.usernames.indexOf(control.value)!==-1){
    return {forbidden:true}
  }
 return null     
}

// checkingExistingEmails(control:FormControl):Promise<{[s:string]:boolean} |null> | Observable <{[s:string]:boolean} |null>{
//   const promise=new Promise<{[s:string]:boolean} |null>(resolve,reject)=>{
//     setTimeout(()=>{
//       if(this.emails.indexOf(control.value)!==-1){
//         resolve({emailfound: true})
//       }else{
//         resolve(null)
//       }

//     },2000)
//   }
//   return promise

// }


}


