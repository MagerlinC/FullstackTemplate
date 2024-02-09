import {
  APIConsumedBodylessFunction,
  APIConsumedFunction,
} from '@abstractions/APIFunctions';
import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';
import { getFromAPI, postToAPI } from './apiService';
import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';

const examplePath = 'example';

export const getExamples: APIConsumedBodylessFunction<ExampleDTO[]> = () => {
  return getFromAPI<ExampleDTO[]>(examplePath);
};

export const postExample: APIConsumedFunction<
  PostExampleRequest,
  ExampleDTO
> = (request: PostExampleRequest) => {
  return postToAPI<PostExampleRequest, ExampleDTO>(examplePath, request);
};
