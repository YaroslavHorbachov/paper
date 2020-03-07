import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { IAdmin } from '@paper/api-interfaces';

@Component({
  selector: 'paper-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminItemComponent implements OnInit {
  @Input() admin: IAdmin;

  constructor() {}

  ngOnInit(): void {}
}
