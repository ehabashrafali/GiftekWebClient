import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PageChangedEvent, PaginationModule } from 'ngx-bootstrap/pagination';
import { PageTitleComponent } from '../../../shared/page-title/page-title.component';
import { EmployeeComponent } from "../../employee/employee.component";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [PageTitleComponent, PaginationModule, CommonModule, NgbDropdownModule, NgbTooltipModule, EmployeeComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  paginateData: any[] = [];
  itemsPerPage = 5;
  startItem!: number;
  endItem!: number;

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Department' }, { label: 'Department', active: true }];
    this.tablepageChanged({ page: 1, itemsPerPage: this.itemsPerPage });
  }


  transactions = [
    {
      name: 'Human Resources',
      email: 'hr@company.com',
      phone: '309-300-9739',
      head: 'Donald Risher',
      establishedDate: '20 Sep, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      name: 'Finance',
      email: 'finance@company.com',
      phone: '253-205-7394',
      head: 'Brody Holman',
      establishedDate: '12 Apr, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      name: 'IT Support',
      email: 'itsupport@company.com',
      phone: '832-330-4300',
      head: 'Jolie Hood',
      establishedDate: '28 Mar, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      name: 'Marketing',
      email: 'marketing@company.com',
      phone: '770-800-9825',
      head: 'Buckminster Wong',
      establishedDate: '23 Aug, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
    {
      name: 'Operations',
      email: 'operations@company.com',
      phone: '804-509-5073',
      head: 'Howard Lyons',
      establishedDate: '18 Sep, 2022',
      status: { label: 'Disabled', class: 'bg-danger-subtle text-danger' },
    },
    {
      name: 'Sales',
      email: 'sales@company.com',
      phone: '205-243-9746',
      head: 'Howard Oneal',
      establishedDate: '12 Feb, 2022',
      status: { label: 'Active', class: 'bg-success-subtle text-success' },
    },
  ];


  tablepageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.startItem = startItem;
    this.endItem = endItem;
    this.paginateData = this.transactions.slice(startItem, endItem);
  }
}
