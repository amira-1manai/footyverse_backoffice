import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/service/user-service.service';
import { User } from 'src/models/User';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})

export class ManageUsersComponent {
  displayedColumns: string[] = ['First Name', 'Last Name', 'Email', 'Role', 'action'];
  dataSource: User[];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data : any) => {
        console.log('Users fetched successfully:', data);
        this.dataSource = data;

        console.log("dataSource: ", this.dataSource);
        localStorage.setItem('role', 'General_director');
      },
      error => {
        console.error('Error fetching injuries:', error);
      }
    );
  } 

  deleteUser(id: string) {
    this.userService.delete(id).subscribe(
      (data: any) => {
        console.log('User deleted successfully:', data);
        this.dataSource = this.dataSource.filter(user => user._id !== id);
      }
    );
  }
}

