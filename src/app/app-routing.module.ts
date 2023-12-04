import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMovieComponent } from './ui/page-movie/page-movie.component';
import { AuthApprovedComponent } from './components/auth-approved/auth-approved.component';
import { ProfileComponent } from './ui/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: PageMovieComponent },
  { path: 'approved', component: AuthApprovedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
