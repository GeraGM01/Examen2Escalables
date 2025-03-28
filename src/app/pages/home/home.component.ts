import { Component } from '@angular/core';
import { ShowCardComponent } from '../../components/show-card/show-card.component';
import { ControlsComponent } from '../../components/controls/controls.component';
import { Show } from '../../interfaces/show.interface';
import { CommonModule } from '@angular/common';
import { TvShowService } from '../../services/tv-show.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ShowCardComponent, ControlsComponent, CommonModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  querySearch: string = "";

  constructor(private tvShowsService: TvShowService) {
  }

  get shows(): Show[] {
    return this.tvShowsService.filteredShows;
  }

  deleteByIndex(index: number): void {
    this.tvShowsService.deleteByIndex(index);
  }

  deleteLast(): void {
    this.tvShowsService.deleteLast();
  }

  orderByName(): void {
    this.tvShowsService.orderByName();
  }

  deleteByName(name: string): void {
    this.tvShowsService.deleteByName(name);
  }

  onSearch(): void {
    this.tvShowsService.querySearch = this.querySearch;
  }

}
