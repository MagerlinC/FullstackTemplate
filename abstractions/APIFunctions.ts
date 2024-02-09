// API

export type APIFunction<RequestType, ResponseType> = (
  request: RequestType,
) => Promise<ResponseType>;

export type APIBodylessFunction<ResponseType> = () => Promise<ResponseType>;

// Consumer

export interface ConsumedAPIResponse<ResponseType> {
  data: ResponseType;
  status: number;
  errorMessage?: string;
}

export function toConsumedResponse<ResponseType>(
  data: ResponseType,
  status: number,
  errorMessage?: string,
) {
  return {
    data,
    status,
    errorMessage,
  } as ConsumedAPIResponse<ResponseType>;
}

export type APIConsumedFunction<RequestType, ResponseType> = (
  request: RequestType,
) => Promise<ConsumedAPIResponse<ResponseType>>;

export type APIConsumedBodylessFunction<ResponseType> = () => Promise<
  ConsumedAPIResponse<ResponseType>
>;
