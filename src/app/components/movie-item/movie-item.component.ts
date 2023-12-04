import { Component, Input, TemplateRef } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListResponse } from '../../model/list.interface';
import { List, ListsResponse } from '../../model/personal-list.interface';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {

  @Input() movie: any;
  listsList: List[] = [];

  constructor(private accountService: AccountService, private modalService: NgbModal) { }


  getImage() {
    return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
  }

  openModal(content: TemplateRef<any>) {
    this.accountService.getPersonalLists().subscribe(resp => {
      this.listsList = resp.results;
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    });
  }

  addToList(idList: any, idMovie: any) {
    this.accountService.addMovieToList(idList, idMovie).subscribe()
    this.modalService.dismissAll()
  }
}
