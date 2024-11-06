import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoutingService } from 'src/app/services/scouting.service';

import { Location } from '@angular/common';
import { scouting } from 'src/models/scouting';

@Component({
  selector: 'app-detail-scouting',
  templateUrl: './detail-scouting.component.html',
  styleUrls: ['./detail-scouting.component.css']
})
export class DetailScoutingComponent implements OnInit {
  scouting!: scouting;

  constructor(
    private scoutingService: ScoutingService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params:', params['id']);

      this.scoutingService.getscouting(params['id']).subscribe(
        (scouting: any) => {
          console.log('Scouting entry fetched successfully:', scouting);
          this.scouting = scouting;
        },
        (error) => {
          console.log('Error retrieving scouting entry:', error);
        }
      );
    });
  }

  goBack() {
    this.location.back();
  }

  updateScouting() {
    this.router.navigate(['/scouting/update-scouting', this.scouting._id]);
  }
}