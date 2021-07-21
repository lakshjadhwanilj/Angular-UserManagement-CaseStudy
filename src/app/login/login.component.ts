import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  //to resolve errors of initn add "strictPropertyInitialization": false,to tsconfig.json

  submitted: boolean = false
  invalidLogin: boolean = false

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.submitted = true
    if (this.loginForm.invalid) {
      return
    }
    if (this.loginForm.controls.email.value === 'laksh@gmail.com' && this.loginForm.controls.password.value === '123456') {
      localStorage.setItem('username', this.loginForm.controls.email.value)
      this.router.navigate(['list-user'])
    } else {
      this.invalidLogin = true
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
