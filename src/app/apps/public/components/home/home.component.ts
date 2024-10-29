import {
  AfterViewInit,
  Component,
  HostBinding,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { debounceTime } from 'rxjs';
import { HomeService } from './home.service';
import { UserType } from './home.type';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserListFilterComponent } from '../user-list-filter/user-list-filter.component';
import { TablePagesComponent } from '../../../table-pages/table-pages.component';
import { AppDrawerService } from '../../../components/app-drawer/app-drawer.service';
import { TableFirstLastComponent } from '../../../table-first-last/table-first-last.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartComponentComponent } from './components/chart-component/chart-component.component';

@Component({
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  selector: 'app-home',
  host: {
    class: 'app-host',
  },
  standalone: true,
  imports: [
    // Modules
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTabsModule,
    // Components
    TablePagesComponent,
    TableFirstLastComponent,
    UserListFilterComponent,
    ChartComponentComponent,
  ],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('tablePaginator') tablePaginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @HostBinding('class.app-host') value: number = 1;

  // Form Control
  filterFormControl = new FormControl();

  activePage: number = 1;
  parentPageList: number[] = new Array(10);
  isFirstPage: boolean = true;
  isLastPage: boolean = false;

  userList: UserType[] = [];
  filteredUserList: UserType[] = [];
  dataSource: MatTableDataSource<UserType> = new MatTableDataSource();

  // Display
  displayedColums: string[] = [
    'no',
    'name',
    'age',
    'gender',
    'race',
    'occupation',
    'menu',
  ];

  displayedColums2: string[] = ['religion', 'address'];

  constructor(
    private homeService: HomeService,
    private appDrawerService: AppDrawerService,
  ) {
    this.homeService.getUserFromServer().then((users) => {
      this.userList = users;
      this.filterUserList('');
    });

    this.filterFormControl.valueChanges.pipe(debounceTime(800)).subscribe({
      next: (value) => {
        console.log(value);
        this.filterUserList(value);
      },
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.tablePaginator;
    this.dataSource.sort = this.sort;
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

  filterUserList(name: string) {
    this.filteredUserList = [];

    this.filteredUserList = this.userList.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase()),
    );

    this.dataSource.data = this.filteredUserList;
  }

  openDrawer() {
    this.appDrawerService.openDrawer();
  }

  openPortal() {
    this.appDrawerService.setDrawerWidth('400px');
    this.appDrawerService.setPortalComponent(UserListFilterComponent);
    this.appDrawerService.openDrawer();
  }
}
