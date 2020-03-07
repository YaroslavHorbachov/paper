import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IAdmin } from '@paper/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'paper-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  admins$ = this.http.get<IAdmin>('/api/paper-admin/admins');

  ngOnInit(): void {}
}
