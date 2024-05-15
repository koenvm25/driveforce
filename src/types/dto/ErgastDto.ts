import {AxiosResponse} from 'axios';

export interface ApiResult<T> {
  MRData?: T;
}

export type ErgastResponse<T> = Promise<AxiosResponse<ApiResult<T>, any>>;
