import { Admin } from './models/admin';
import { Injectable } from '@nestjs/common';
import { CitiesEnum, SocialsEnum } from '@paper/api-interfaces';

@Injectable()
export class PaperAdminService {
  private readonly admins: Admin[] = [
    new Admin('Tom', 'Jenkins', 'tom.jenkins@test.com'),
    new Admin('Angela', 'Jenkins', 'angela.jenkins@test.com', CitiesEnum.NY, [
      SocialsEnum.TW
    ])
  ];

  public getPaperAdmins() {
    return this.admins;
  }
}
