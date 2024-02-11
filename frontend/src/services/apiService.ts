const BASE_URL = 'http://localhost:5000/';

const baseHeaders = new Headers({
  Accept: 'application/json',
  'content-type': 'application/json',
});

export async function getFromAPI<ResponseType>(path: string) {
  const req = {
    headers: baseHeaders,
    method: 'GET',
  };
  const response = await fetch(BASE_URL + path, req);
  const json = await response.json();
  return json as ResponseType;
}

export async function postToAPI<RequestType, ResponseType>(
  path: string,
  body: RequestType,
) {
  const request = {
    headers: baseHeaders,
    method: 'POST',
    body: JSON.stringify(body),
  };
  const response = await fetch(BASE_URL + path, request);
  const json = await response.json();
  return json as ResponseType;
}
