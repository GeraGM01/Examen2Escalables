import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tv-show-details',
  imports: [CommonModule, MatCardModule],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent implements OnInit {
  showName: string = "";
  show: Show | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tvShowService: TvShowService
  ) {}

  ngOnInit(): void {
    this.showName = this.route.snapshot.paramMap.get("name") || "";
    this.show = this.tvShowService.shows.find(show => show.name === this.showName);

    // Si no se encuentra la serie, redirigir a not-found
    if (!this.show) {
      this.router.navigate(['/not-found'], { 
        queryParams: { 
          message: `La serie "${this.showName}" no fue encontrada` 
        } 
      });
    }
  }
}