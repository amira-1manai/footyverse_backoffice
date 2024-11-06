import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoutingService } from 'src/app/services/scouting.service';
import { scouting } from 'src/models/scouting';

@Component({
  selector: 'app-update-scouting',
  templateUrl: './update-scouting.component.html',
  styleUrls: ['./update-scouting.component.css']
})
export class UpdateScoutingComponent implements OnInit {
  scoutingId!: number;
  scouting: scouting;
  scoutingForm: FormGroup = new FormGroup({
    weaknesses: new FormControl('', Validators.required),
    playername: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rate: new FormControl('', Validators.required),
    potential: new FormControl('', Validators.required),
    power: new FormControl('', Validators.required)
  });

  constructor(
    private formBuilder: FormBuilder,
    private scoutingService: ScoutingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.scoutingId = params['id'];
      this.fetchScouting();
    });
  }

  fetchScouting(): void {
    this.scoutingService.getscouting(this.scoutingId).subscribe(
      (scouting: scouting) => {
        console.log('Scouting fetched successfully:', scouting);
        this.scouting = scouting;
        this.initializeForm();
      },
      error => {
        console.error('Error fetching scouting:', error);
      }
    );
  }
  initializeForm(): void {
    this.scoutingForm = this.formBuilder.group({
      weaknesses: [this.scouting.weaknesses, Validators.required],
      playername: [this.scouting.playername, Validators.required],
      description: [this.scouting.description, Validators.required],
      rate: [this.scouting.rate, Validators.required],
      potential: [this.scouting.potential, Validators.required],
      power: [this.scouting.power, Validators.required]
    });
  }
  
  
  

  onSubmit(): void {
    if (this.scoutingForm.valid) {
      this.scouting = { ...this.scouting, ...this.scoutingForm.value };
      this.scoutingService.updatescouting(this.scouting).subscribe(
        () => {
          console.log('Scouting updated successfully');
          alert('Scouting updated successfully');
          this.router.navigate(['scouting/view']);
        },
        error => {
          console.error('Error updating scouting:', error);
        }
      );
    }
  } 
}
