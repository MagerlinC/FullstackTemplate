import { ExampleDTO } from '@abstractions/ExampleDomain/DTO';
import { getFromAPI, postToAPI } from './apiService';
import { PostExampleRequest } from '@abstractions/ExampleDomain/Post';
import {
  EXAMPLE_DOMAIN_PATH,
  GetExampleFunction,
  PostExampleFunction,
} from '@abstractions/ExampleDomain/Controller';

export const getExamples: GetExampleFunction = () => {
  return getFromAPI<ExampleDTO[]>(EXAMPLE_DOMAIN_PATH);
};

export const postExample: PostExampleFunction = (
  request: PostExampleRequest,
) => {
  return postToAPI<PostExampleRequest, ExampleDTO>(
    EXAMPLE_DOMAIN_PATH,
    request,
  );
};
