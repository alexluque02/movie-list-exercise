import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountResponse } from '../../model/account.interface';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-auth-approved',
  templateUrl: './auth-approved.component.html',
  styleUrl: './auth-approved.component.css'
})
export class AuthApprovedComponent {


  constructor(private authService: AuthService, private accountService: AccountService) { }
  account!: AccountResponse;
  ngOnInit(): void {
    let token = localStorage.getItem('REQUEST_TOKEN');

    this.authService.createSession(token!).subscribe((resp: { session_id: string; }) => {
      localStorage.setItem('SESSION_ID', resp.session_id);
      this.accountService.getAccountDetails().subscribe((resp: AccountResponse) => {
        this.account = resp;
        localStorage.setItem('AVATAR_PATH', ('https://www.themoviedb.org/t/p/w50_and_h50_face' + resp.avatar.tmdb.avatar_path));
        localStorage.setItem('USERNAME', resp.username);
        localStorage.setItem('ACCOUNT_ID', resp.id.toString());
        window.location.href = '/home'
      });
    });
  }
}
