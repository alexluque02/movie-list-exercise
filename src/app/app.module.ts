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
import { HttpClientModule } from '@angular/common/http';
import { ProfileHeaderComponent } from './components/profile-header/profile-header.component';
import { ProfileComponent } from './ui/profile/profile.component';
import { ListsListComponent } from './components/lists-list/lists-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    PageMovieComponent,
    MovieItemComponent,
    NavbarComponent,
    AuthApprovedComponent,
    ProfileHeaderComponent,
    ProfileComponent,
    ListsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
