import { request } from "http";

export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'patch' | 'PATCH'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'

export interface AxiosRequestConfig {
  url?: string,
  method?: Method,
  data?: any,
  params?: any,
  headers?: any,
  responseType?: XMLHttpRequestResponseType,
  timeout?: number
}

export interface AxiosResponse<T=any> {
  data: T,
  status: number,
  statusText: string,
  headers: any,
  config: AxiosRequestConfig,
  request: any
}

export interface AxiosPromise<T=any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
}

export interface Axios {
  request<T=any>(config: AxiosRequestConfig): AxiosPromise<T>
  get<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise
  delete<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise
  head<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise
  options<T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise
  post<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  put<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
  patch<T=any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise
}

export interface AxiosInstance extends Axios{
  (config: AxiosRequestConfig): AxiosPromise
  (url: string, config?: AxiosRequestConfig): AxiosPromise
}
