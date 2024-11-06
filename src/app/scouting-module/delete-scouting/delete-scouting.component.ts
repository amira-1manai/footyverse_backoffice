import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScoutingService } from 'src/app/services/scouting.service';

@Component({
  selector: 'app-delete-scouting',
  templateUrl: './delete-scouting.component.html',
  styleUrls: ['./delete-scouting.component.css']
})
export class DeleteScoutingComponent {
  @Input() scoutingId!: number;
  @Output() deleted = new EventEmitter<void>();

  constructor(private scoutingService: ScoutingService) {}

  confirmDelete(): void {
    this.scoutingService.deletescouting(this.scoutingId).subscribe(
      () => {
        // Emit event indicating successful deletion
        this.deleted.emit();
      },
      (error) => {
        console.error('Error deleting scouting:', error);
        // Handle error if necessary
      }
    );
  }

  cancelDelete(): void {
    // Handle cancellation logic if needed
  }
}
