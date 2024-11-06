import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { ScoutingService } from 'src/app/services/scouting.service';
import { scouting } from 'src/models/scouting';

@Component({
  selector: 'app-add-scouting',
  templateUrl: './add-scouting.component.html',
  styleUrls: ['./add-scouting.component.css']

})
 
export class AddScoutingComponent {
  scoutingForm!: FormGroup;
  addedScouting !: scouting;
  preview: string;
  selectedFile: File;

  constructor(
    private formBuilder: FormBuilder,
    private scoutingService: ScoutingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scoutingForm = this.formBuilder.group({

      avatar: ['', Validators.required],
      playername: ['', Validators.required],
      rate: ['', Validators.required],
      position: ['', Validators.required],
      age: ['', Validators.required],
      weaknesses: ['', Validators.required],
      description: ['', Validators.required],
      potential: ['', Validators.required],
      power: ['', Validators.required],
      MatchesPlayed: ['', Validators.required],
      GoalsScored: ['', Validators.required],
      Assists: ['', Validators.required],
      YellowCards: ['', Validators.required],
      RedCards: ['', Validators.required],
      ShotsonTarget: ['', Validators.required],
    

 
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


  onSubmit(): void {
    this.addedScouting = this.scoutingForm.value;
    this.addedScouting.avatar = this.selectedFile.name;
    this.scoutingService.addscouting(this.addedScouting).subscribe(
      (scouting: scouting) => {
        this.scoutingForm.reset();
        alert('Scouting added successfully');
        this.navigateToListeScouting();
      },
      error => {
        console.error('Error fetching scoutings:', error);
      }
    );
  }

  navigateToListeScouting(): void {
    this.router.navigate(['scouting/view']); // Corrected navigation path
  }
}
