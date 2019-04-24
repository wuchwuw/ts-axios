export type Method = 'get' | 'GET'
  | 'post' | 'POST'
  | 'delete' | 'DELETE'
  | 'patch' | 'PATCH'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'

export interface AxiosRequestConfit {
  url: string,
  method?: Method,
  data?: any,
  param?: any
}
