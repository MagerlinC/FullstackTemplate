import { APIConsumedBodylessFunction } from 'abstractions/APIFunctions';
import { GetExampleResponse } from 'abstractions/ExampleDomain/Get';
import { getFromAPI } from './apiService';

const examplePath = '/example';

export const getExample: APIConsumedBodylessFunction<
  GetExampleResponse
> = () => {
  return getFromAPI<GetExampleResponse>(examplePath);
};
