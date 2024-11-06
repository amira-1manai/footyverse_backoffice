import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/service/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  _id: string;
  userForm: FormGroup;
  userData: any; // Replace with appropriate user data type
  changePassword: boolean = false; // Flag for password change

  constructor(private fb: FormBuilder, private userService: UserServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get('id')!;

    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      newPassword: [''],
      confirmPassword: [''],
    }, { validator: this.checkPasswords }); // Add custom validator for password mismatch
    

    this.userService.getUser(this._id).subscribe(user => {
      console.log ("aaaa",user);
      this.userData = user; // Populate user data
      this.userForm.patchValue(user); // Pre-populate form with user data
    });
  }

  onSubmit(): void {
    // Handle form submission logic (call updateProfile in UserService)
  }

  checkPasswords(group: FormGroup) { // Custom validator for password mismatch
    const pass = group.get('newPassword')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    

    return pass === confirmPass ? null : { passwordMismatch: true };
  }

  toggleChangePassword() {
    this.changePassword = !this.changePassword;
  }
}