export interface ApiResult<T> {
  data: T;
  error: null | string;
}
