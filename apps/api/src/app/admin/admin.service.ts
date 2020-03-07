import { Admin } from './models/admin';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PaperAdminService {
  private readonly admins: Admin[] = [
    new Admin('Tom', 'Jenkins', 'tom.jenkins@test.com'),
    new Admin('Angela', 'Jenkins', 'angela.jenkins@test.com')
  ];

  public getPaperAdmins() {
    return this.admins;
  }
}
