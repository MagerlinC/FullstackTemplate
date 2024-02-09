import { APIBodylessFunction, APIFunction } from 'abstractions/APIFunctions';
import { ExampleDTO } from './DTO';
import { PostExampleRequest } from './Post';

export interface IExampleController {
  getExamples: APIBodylessFunction<ExampleDTO[]>;
  postExample: APIFunction<PostExampleRequest, ExampleDTO>;
}
