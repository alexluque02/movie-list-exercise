import { Component, Input, TemplateRef } from '@angular/core';
import { List } from '../../model/personal-list.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { ListResponse } from '../../model/list.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrl: './lists-list.component.css'
})
export class ListsListComponent {

  idList = new FormControl('', Validators.required);
  idMovie = new FormControl('', Validators.required);

  name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  deleted = false;

  @Input() personalLists!: List[];
  listSelected!: ListResponse;

  constructor(private modalService: NgbModal, private accountService: AccountService) {

  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
  }

  openDetails(content: TemplateRef<any>, id: any) {
    this.accountService.getListDetails(id).subscribe(resp => {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
      this.listSelected = resp;
    });
  }

  openModalAdd(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  submit() {
    this.accountService.createList(this.name.value, this.description.value).subscribe()
    this.modalService.dismissAll()
  }

  submitAdd() {
    this.accountService.addMovieToList(this.idList.value, this.idMovie.value).subscribe()
    this.modalService.dismissAll()
  }

  clear(listId: any) {
    this.accountService.clearList(listId).subscribe()
    this.modalService.dismissAll()
  }

  deleteList(listId: any) {
    this.accountService.deleteList(listId).subscribe()
    this.deleted = true;
  }
}
