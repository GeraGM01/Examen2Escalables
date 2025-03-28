import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv-show-details',
  imports: [],
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css'
})
export class TvShowDetailsComponent {
  showName: string = "";

  constructor(private route: ActivatedRoute){
    this.showName = this.route.snapshot.paramMap.get("name") || "";
  }
}
