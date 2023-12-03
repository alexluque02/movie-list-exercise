import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie-list.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-page-movie',
  templateUrl: './page-movie.component.html',
  styleUrl: './page-movie.component.css'
})
export class PageMovieComponent implements OnInit {

  movieList: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMoviesList().subscribe(resp => {
      this.movieList = resp.results
    })
  }



}
