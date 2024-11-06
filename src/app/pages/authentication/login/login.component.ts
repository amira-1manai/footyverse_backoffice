import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/models/User';
import { UserServiceService } from 'src/app/services/service/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class AppSideLoginComponent implements OnInit {

  protected aFormGroup: FormGroup;
  loginForm!: FormGroup;

  

  constructor(private router: Router, private formBuilder: FormBuilder,
     private userService: UserServiceService) {
    this.aFormGroup = new FormGroup({});
  }



  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  siteKey: string = "6LeFVKEpAAAAAKJ4eWnnNe1G-xEPNni4MUR0jiA6";

  onSubmit() {
    console.log("ezef");



    if (this.loginForm.valid) {
      console.log(this.loginForm.value);

      
      this.userService.login(this.loginForm.value).subscribe(
        (res: User) => {
          localStorage.setItem('user', JSON.stringify(res));

          switch (res.Role) {
            case "TechnicalDirector":
              this.router.navigate(['/dashboard']);
              break;
            default:
              alert("An admin should connect");
              break;
          }

        },

        
        (err) => {
          alert("Invalid email or password");
        }
      );
    }
    else {
      alert("Please fill all the required fields");
    }

    
  }

}