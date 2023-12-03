import { HttpClient } from "@angular/common/http";
import { PopularMoviesListResponse } from "../model/movie-list.interface";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private http: HttpClient) { }

    getPopularMoviesList(): Observable<PopularMoviesListResponse> {
        return this.http.get<PopularMoviesListResponse>('https://api.themoviedb.org/3/movie/popular?api_key=78d6414b91baf8d0ca5de73fecb5b290&language=es');
    }
}