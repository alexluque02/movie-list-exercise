import { Component, Input } from '@angular/core';
import { Movie } from '../../model/movie-list.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  @Input() movieList!: Movie[];

}
