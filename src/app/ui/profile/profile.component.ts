import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { List } from '../../model/personal-list.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  personalLists: List[] = [];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getPersonalLists().subscribe(reps => {
      this.personalLists = reps.results;
    })
  }



}
