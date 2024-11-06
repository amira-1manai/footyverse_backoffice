import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InjuryService } from 'src/app/services/injury.service';
import { Injury } from 'src/models/Injury';
@Component({
  selector: 'app-view-injuries-back',
  templateUrl: './view-injuries-back.component.html',
  styleUrls: ['./view-injuries-back.component.css']
})
export class ViewInjuriesBackComponent {
  selectedOption: string = 'injured';
  displayedColumns: string[] = ['informations', 'date', 'injuryTime', 'status', 'action'];
  dataSource: Injury[];
  filteredInjuries: Injury[];

  searchText: string = '';


  constructor(private injuryService: InjuryService, private router: Router) { }

  ngOnInit(): void {
    this.injuryService.getInjuriesStatusActive().subscribe(
      (data : any) => {
        console.log('Injuries fetched successfully:', data);
        this.dataSource = data;
        this.filteredInjuries = this.dataSource.filter(injury => !this.isReturnDateBeforeCurrentDate(injury.returnDate));

        console.log("dataSource: ", this.dataSource);
        localStorage.setItem('role', 'General_director');
      },
      error => {
        console.error('Error fetching injuries:', error);
      }
    );

  }

  isReturnDateBeforeCurrentDate(dateString: string): boolean {
    const returnDate = new Date(dateString);
    const currentDate = new Date();
    return returnDate < currentDate;
  }

  filterInjuries() {
    console.log("selectedOption: ", this.selectedOption);
  
    if (this.selectedOption === 'injured') {
      // Filter injuries that are not yet recovered (returnDate is in the future) and not "archieved"
      const injuries = this.dataSource.filter(injury => !this.isReturnDateBeforeCurrentDate(injury.returnDate));
      this.filteredInjuries = injuries.filter(injury => injury.status !== "archieved");
    } else if (this.selectedOption === 'recovered') {
      // Filter injuries that are already recovered (returnDate is in the past) and not "archieved"
      const injuries = this.dataSource.filter(injury => this.isReturnDateBeforeCurrentDate(injury.returnDate));
      this.filteredInjuries = injuries.filter(injury => injury.status !== "archieved");
    } else if (this.selectedOption === 'all') {
      // Show all injuries regardless of status
      this.filteredInjuries = this.dataSource;
    } else if (this.selectedOption === 'archived') {
      this.injuryService.getInjuriesStatusArchived().subscribe(
        (data : any) => {
          console.log('Injuries fetched successfully:', data);
          this.filteredInjuries = data;
        }
      );
    }
  
    console.log("filteredInjuries: ", this.filteredInjuries);
  }
  

  applyFilter() {
    const filterValue = this.searchText.trim().toLowerCase();
    this.filterInjuries();
    // Apply filter based on search text
    this.filteredInjuries = this.filteredInjuries.filter(injury => 
      Object.values(injury).some(value => 
        value.toString().toLowerCase().includes(filterValue)
      )
    );
  }

  archiveInjury(injury: Injury) {
    injury.status = 'archived';
    this.injuryService.updateInjury(injury).subscribe(
      (data: any) => {
        console.log('Injury archived successfully:', data);
        this.dataSource = this.dataSource.filter(inj => inj._id !== injury._id);
        this.filteredInjuries = this.filteredInjuries.filter(inj => inj._id !== injury._id);
      },
      error => {
        console.error('Error archiving injury:', error);
      }
    );
  }

}
