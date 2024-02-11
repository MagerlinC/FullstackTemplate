import { ExampleDTO } from "./DTO";
import { PostExampleRequest } from "./Post";

export const EXAMPLE_DOMAIN_PATH = "example";

export type GetExampleFunction = () => Promise<ExampleDTO[]>;

export type PostExampleFunction = (
  req: PostExampleRequest
) => Promise<ExampleDTO>;

// Endpoints available in the ExampleDomain
export interface IExampleController {
  getExamples: GetExampleFunction;
  postExample: PostExampleFunction;
}
