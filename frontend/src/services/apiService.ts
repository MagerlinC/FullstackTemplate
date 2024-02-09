import { toConsumedResponse } from 'abstractions/APIFunctions';

const BASE_URL = 'localhost:5000/';

export async function getFromAPI<T>(path: string) {
  const response = await fetch(BASE_URL + path);
  return toConsumedResponse(response.body as T, response.status);
}
