import { Component, HostBinding } from '@angular/core';
import { TableFirstLastComponent } from '../table-first-last/table-first-last.component';
import { TablePagesComponent } from '../table-pages/table-pages.component';
import { HomeService } from './home.service';
import { UserType } from './home.type';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  selector: 'app-home',
  standalone: true,
  imports: [
    // Components
    TablePagesComponent,
    TableFirstLastComponent,
  ],
})
export class HomeComponent {
  @HostBinding('class.app-host') value: number = 1;

  activePage: number = 1;
  parentPageList: number[] = new Array(10);
  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  userList: UserType[] = [];

  constructor(private homeService: HomeService) {
    this.homeService.getUserFromServer().then((users) => {
      this.userList = users;
    });
  }

  pageChanged(pageNo: number) {
    this.activePage = pageNo;
    if (pageNo == 1) {
      this.isFirstPage = true;
      this.isLastPage = false;
    } else if (this.activePage == this.parentPageList.length) {
      this.isLastPage = true;
      this.isFirstPage = false;
    } else {
      this.isFirstPage = false;
      this.isLastPage = false;
    }
  }

  firstPageChanged(first: boolean) {
    this.isFirstPage = first;
    if (first) {
      this.isLastPage = false;
      this.activePage = 1;
    }
  }

  lastPageChanged(last: boolean) {
    this.isLastPage = last;
    if (last) {
      this.isFirstPage = false;
      this.activePage = this.parentPageList.length;
    }
  }
}
