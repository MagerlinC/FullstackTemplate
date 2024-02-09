import { APIBodylessFunction, APIFunction } from 'abstractions/APIFunctions';
import { GetExampleResponse } from './Get';
import { PostExampleRequest } from './Post';
import { ExampleEntity } from 'backend/src/ExampleDomain/Entities/ExampleEntity';

export interface IExampleController {
  getExamples: APIBodylessFunction<GetExampleResponse>;
  postExample: APIFunction<PostExampleRequest, ExampleEntity>;
}
