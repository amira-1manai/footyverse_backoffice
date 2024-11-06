import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/service/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  
  preview: string;
  addUserForm: FormGroup;
  selectedFile: File;

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserServiceService) { }

  ngOnInit() {
    this.addUserForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      Role: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit() {

    if (!this.addUserForm.valid) {
      alert('Please fill in all fields');
      return;
    }

    else {
      if(!this.addUserForm.value.Role) {
        alert('Please fill in all fields');
        return;
      }

      else {

      console.log(this.addUserForm.value);

      this.userService.register(this.addUserForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.router.navigate(['/user/manage-users']);
        }
      );
     }
    }
  }

}
