import { Controller, Get } from '@nestjs/common';

import { PaperAdminService } from './admin.service';

@Controller('paper-admin')
export class PaperAdminController {
  constructor(private readonly adminsService: PaperAdminService) {}

  @Get('admins')
  public getAllAdmins() {
    return this.adminsService.getPaperAdmins();
  }
}
