import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
import { transformRequest, transformResoponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'

export default function dispatchRequest (config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config)
    .then(res => {
      return transformResponseData(res)
    })
}

function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL (config: AxiosRequestConfig): string {
  let { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders (config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData (res: AxiosResponse): any {
  res.data = transformResoponse(res.data)
  return res
}