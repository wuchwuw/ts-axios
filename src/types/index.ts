export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'patch' | 'PATCH'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'

export interface AxiosRequestConfig {
  url: string,
  method?: Method,
  data?: any,
  params?: any
}
