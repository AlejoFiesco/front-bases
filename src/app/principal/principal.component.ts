import { Component, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})

export class PrincipalComponent {

  isDisabled: Boolean = true;
  error: Boolean = false;

  constructor(private router: Router) {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const tempDate = form.value.currentMoment.toString();
      form.resetForm();
      this.error = false;
      this.router.navigate(['/login']);
      localStorage.setItem('date', tempDate);
    } else {
      this.error = true;
    }
  }
}
