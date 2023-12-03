import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {

  @Input() movie: any;


  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }
}
