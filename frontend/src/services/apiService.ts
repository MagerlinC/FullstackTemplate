const BASE_URL = 'http://localhost:5000/';

export async function getFromAPI<ResponseType>(path: string) {
  const headers = new Headers();
  const req = {
    headers: headers,
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
  const headers = new Headers();
  const request = {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(body),
  };
  const response = await fetch(BASE_URL + path, request);
  const json = await response.json();
  return json as ResponseType;
}
