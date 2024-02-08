import { Injectable } from '@nestjs/common';
import {
  GetOwnershipDataRequest,
  GetOwnershipDataResponse,
} from 'api-definition/OwnershipData/GetOwnershipData';

@Injectable()
export class OwnershipDataService {
  getHello(): string {
    return 'Hello World!';
  }
  getOwnership(
    request: GetOwnershipDataRequest,
  ): Promise<GetOwnershipDataResponse> {
    return Promise.resolve({ data: 42 });
  }
}
