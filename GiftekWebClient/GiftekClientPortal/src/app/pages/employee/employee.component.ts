import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule, NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../shared/page-title/page-title.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [PageTitleComponent, PaginationModule, CommonModule, NgbDropdownModule, NgbTooltipModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

  constructor(private modalService: NgbModal, public r: Router) { }

  transactions = [
    {
      avatar: 'assets/images/users/avatar-3.jpg',
      name: 'Ahmed Fayed',
      email: 'ahmed.fayed@protonmail.org',
      phone: '309-300-9739',
      date: '20 Sep, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-8.jpg',
      name: 'Youssef Naguib',
      email: 'youssef.naguib@protonmail.org',
      phone: '253-205-7394',
      date: '12 Apr, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      avatar: 'assets/images/users/avatar-3.jpg',
      name: 'Sarah Mansour',
      email: 'sarah.mansour@protonmail.org',
      phone: '832-330-4300',
      date: '28 Mar, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-9.jpg',
      name: 'Kareem El-Shafei',
      email: 'kareem.elshafei@protonmail.org',
      phone: '770-800-9825',
      date: '23 Aug, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      avatar: 'assets/images/users/avatar-7.jpg',
      name: 'Amira Soliman',
      email: 'amira.soliman@icloud.org',
      phone: '804-509-5073',
      date: '18 Sep, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      avatar: 'assets/images/users/avatar-9.jpg',
      name: 'Omar Tarek',
      email: 'omar.tarek@protonmail.org',
      phone: '205-243-9746',
      date: '12 Feb, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
  ];


  breadCrumbItems!: Array<{}>;


  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Employee' }, { label: 'Employee', active: true }];

    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }

  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.transactions.slice(startItem, endItem);
  }

  openModalCenter(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
