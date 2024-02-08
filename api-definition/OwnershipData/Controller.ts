import { GetOwnershipDataRequest, GetOwnershipDataResponse } from "./GetOwnershipData";

export interface OwnershipDataController {
  getOwnershipData: (request: GetOwnershipDataRequest) => Promise<GetOwnershipDataResponse>;
}
