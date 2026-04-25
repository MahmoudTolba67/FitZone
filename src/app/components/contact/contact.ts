import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name :string = ''
  showPopUp:boolean = false; 
  onSubmit(form: NgForm) {
    if(form.valid) {
      this.showPopUp = true ;
      this.name = form.value.name;
      form.resetForm();
    }
  }
  close(){
    this.showPopUp = false
    
  }
  
  
}
