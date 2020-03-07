import { Module } from '@nestjs/common';
import { PaperAdminController } from './admin.controller';
import { PaperAdminService } from './admin.service';

@Module({
  controllers: [PaperAdminController],
  providers: [PaperAdminService]
})
export class PaperAdminModule {}
