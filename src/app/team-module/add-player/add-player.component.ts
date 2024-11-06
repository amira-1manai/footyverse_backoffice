import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { UserServiceService } from 'src/app/services/service/user-service.service';
import { Player } from 'src/models/Player';
import { User } from 'src/models/User';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  preview: string;
  addPlayerForm: FormGroup;
  selectedFile: File;
  addedPlayer: Player;
  addedUser: User;

  constructor(private formBuilder: FormBuilder, private router: Router, private playerService: PlayerService, private userService: UserServiceService) { }

  ngOnInit() {
    this.addPlayerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      playerNumber: new FormControl(),
      age: new FormControl(),
      height: new FormControl(),
      weight: new FormControl(),
      email: new FormControl(),
      phoneNumber: new FormControl(),
      country: new FormControl(),
      position: new FormControl(),
      preferredFoot: new FormControl(),
      password: new FormControl(),
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.preview = reader.result as string;
      };

      this.selectedFile = file;
      console.log('Selected file 2:', this.selectedFile.name);

      this.playerService.uploadAvatar(file).subscribe((response) => {
        console.log('Response:', response);
      }
      );
    }
  }

  copyFileToAssets(): void {
    if (this.selectedFile) {
      const randomName = this.generateRandomName();
      const copiedFile = new File([this.selectedFile], randomName, { type: this.selectedFile.type });

      // You can now use copiedFile for further processing or display
      console.log('Copied file:', copiedFile);
    }
  }

  generateRandomName(): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let randomName = '';
    for (let i = 0; i < 10; i++) {
      randomName += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    randomName += Date.now(); // Append current timestamp to ensure uniqueness
    return randomName;
  }

  onSubmit() {

    if (!this.addPlayerForm.valid) {
      alert('Please fill in all fields');
      return;
    }

    else {
      this.addedUser = this.addPlayerForm.value;
      this.addedUser.Role = 'Player';

      this.userService.register(this.addedUser).subscribe(
        (res: any) => {
          console.log(res);
          console.log(this.addPlayerForm.value);
          this.addedPlayer = this.addPlayerForm.value;
          this.addedPlayer.avatar = this.selectedFile.name;
          this.addedPlayer.idUser = res._id;

          console.log('Added player:', this.addedPlayer);
          this.playerService.addPlayer(this.addedPlayer).subscribe(
            (response) => {
              console.log('Response:', response);
              this.router.navigate(['team/view-team-back']);
              alert('Player added successfully');
            },
            (error) => {
              alert('Please check your fields and try again');
              // Handle the error as needed, such as displaying an error message to the user
            }
          );


        }
      );

    }
  }

}
