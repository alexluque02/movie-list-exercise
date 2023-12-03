import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  avatarUrl = localStorage.getItem('AVATAR_PATH');
  username = localStorage.getItem('USERNAME');

  constructor(private accountService: AccountService) { }
}