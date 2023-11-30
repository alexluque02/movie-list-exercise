import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthApprovedComponent } from './components/auth-approved/auth-approved.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    PageMovieComponent,
    MovieItemComponent,
    NavbarComponent,
    AuthApprovedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
