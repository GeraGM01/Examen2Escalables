import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';
import { TvShowService } from '../../services/tv-show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-tv-show',
  imports: [
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule
  ],
  templateUrl: './new-tv-show.component.html',
  styleUrl: './new-tv-show.component.css'
})
export class NewTvShowComponent {
  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(private tvShowService: TvShowService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      year: new FormControl(null, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      episodes: new FormControl(null, [Validators.required, Validators.min(1)])
    })
  }

  createNewTvShow(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      const newTvShow: Show = {
        description: this.form.value.description,
        image: this.form.value.image,
        name: this.form.value.name,
        episodes: this.form.value.episodes,
        genre: this.form.value.genre,
        likes: [],
        year: this.form.value.year
      }
      this.tvShowService.createNewTvShow(newTvShow);
      this.form.reset();
      this.formSubmitted = false;
    }
    else {
      console.log("Formulario invalido");
    }
  }
}