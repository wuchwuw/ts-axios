import { AxiosRequestConfit } from './types'
import xhr from './xhr'

function axios (config: AxiosRequestConfit): void {
  xhr(config)
}

export default axios
