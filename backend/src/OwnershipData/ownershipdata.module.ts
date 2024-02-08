import { Module } from '@nestjs/common';
import { AppController } from './ownershipdata.controller';
import { OwnershipDataService } from './ownershipdata.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [OwnershipDataService],
})
export class OwnershipDataModule {}
