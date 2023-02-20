import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent {
  genders = ['Male', 'Female']


  @ViewChild('form') form!: NgForm

  submitForm() {
    console.log(this.form);

  }
  prepopulate() {
    this.form.setValue({
      role: "python",
      gender: "male",
      personalData: {
      phone: "07987777",
      username: "wright",
      email: "rightkii2@gmail.com",
      }

    })
  }


}
