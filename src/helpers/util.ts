const toString = Object.prototype.toString

export function isDate (val: any): val is Date {
  return toString.call(val) === '[objcet Date]'
}

export function isObject (val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function extend<T, U> (to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge (...objs: any[]): any {
  const result = Object.create(null)
  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(val, result[key])
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })
}
