import { Controller, Get } from '@nestjs/common';
import { OwnershipDataService } from './ownershipdata.service';
import { OwnershipDataController } from 'api-definition/OwnershipData/Controller';

import {
  GetOwnershipDataRequest,
  GetOwnershipDataResponse,
} from 'api-definition/OwnershipData/GetOwnershipData';

@Controller()
export class AppController implements OwnershipDataController {
  constructor(private readonly appService: OwnershipDataService) {}

  @Get()
  getOwnershipData(
    request: GetOwnershipDataRequest,
  ): Promise<GetOwnershipDataResponse> {
    return this.appService.getOwnership(request);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
