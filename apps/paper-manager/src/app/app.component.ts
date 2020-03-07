import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAdmin } from '@paper/api-interfaces';
import { map } from 'rxjs/operators';
@Component({
  selector: 'paper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  admins$ = this.http.get<IAdmin>('/api/paper-admin/admins');
}
