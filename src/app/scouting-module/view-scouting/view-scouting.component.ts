import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoutingService } from 'src/app/services/scouting.service';
import { scouting } from 'src/models/scouting';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-scouting',
  templateUrl: './view-scouting.component.html',
  styleUrls: ['./view-scouting.component.css']
})
export class ViewScoutingComponent {

  
  displayedColumns: string[] = ['playername', 'age' ,'rate','position', 'weaknesses', 'description', 'potential' ,'MatchesPlayed','action'];
  dataSource : scouting[];
  pageSize = 3;
  currentPageIndex = 0;
  

  searchQuery: string = '';
 
  get paginatedDataSource(): scouting[] {
    const startIndex = this.currentPageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredDataSource.slice(startIndex, endIndex);
  }

  get filteredDataSource(): scouting[] {
    if (!this.searchQuery) {
      return this.dataSource;
    }
    const lowercaseQuery = this.searchQuery.toLowerCase();
    return this.dataSource.filter(
      (element: scouting) => element.playername.toLowerCase().includes(lowercaseQuery)
    );
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDataSource.length / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

  constructor(private scoutingService: ScoutingService, private router: Router) { }

  ngOnInit(): void {
    this.fetchScoutings();
  }

  fetchScoutings(): void {
    this.scoutingService.getscoutings().subscribe(
      (scoutings: scouting[]) => {
        console.log('Scoutings fetched successfully:', scoutings);
        this.dataSource = scoutings;
      },
      error => {
        console.error('Error fetching scoutings:', error);
      }
    );
  }

  isPotentialHigh(potential: number): boolean {
    return potential >= 80;
  }

  deleteScouting(id: number): void {
    this.scoutingService.deletescouting(id).subscribe(
      () => {
        console.log('Scouting deleted successfully');
        this.fetchScoutings(); // Refresh the data after deletion
      },
      error => {
        console.error('Error deleting scouting:', error);
      }
    );
  }

  navigateToUpdateScouting(id: number): void {
    this.router.navigate(['/scouting', 'update-scouting', id]);
  }

  navigateToAddScouting(): void {
    this.router.navigate(['scouting/add']);
  }

  navigateToDetailScouting(id: number): void {
    this.router.navigate(['/scouting', 'detail-scouting', id]);
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPageIndex = page;
    }
  }
  
}