import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router){

  }

  handleSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    console.log({email, password});
    this.router.navigate(['/calendario'])
  }
}
