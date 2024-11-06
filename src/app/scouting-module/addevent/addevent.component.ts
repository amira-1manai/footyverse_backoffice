import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router from '@angular/router'
import { CalendarService } from 'src/app/services/calendar.service';
import { CalendarEvent } from 'src/models/calendarevent';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent {

  EventForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private calendarService: CalendarService,
    private router: Router // Inject Router from '@angular/router'
  ) { }

  ngOnInit(): void {
    this.EventForm = this.formBuilder.group({ // Assign the form group to EventForm
      title: ['', Validators.required],
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.calendarService.addEvent(this.EventForm.value).subscribe(
      (calendarEvent: CalendarEvent) => {
        console.log('EVENT added successfully:', calendarEvent);
        this.EventForm.reset();
        alert('EVENT added successfully');
        // Navigate to the appropriate route after adding the event
        // Example: this.router.navigate(['events']); // Navigate to the events list
        this.router.navigate(['/scouting/view']);

      },
      error => {
        console.error('Error adding event:', error);
        alert('Error adding event');
      }
      
    );
  }
}
