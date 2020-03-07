import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaperAdminModule } from './admin/admin.module';

@Module({
  imports: [PaperAdminModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
