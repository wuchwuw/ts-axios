import { transformRequest, transformResponse } from '../../src/helpers/data'

describe('helpers: data', () => {
  describe('transformRequest', () => {
    test('should transform request data to string if data is a plain object', () => {
      const a = { a: 1 }
      expect(transformRequest(a)).toBe('{"a":1}')
    })
    test('should do nothing if data is not a plain object', () => {
      const a = new URLSearchParams('a=b')
      expect(transformRequest(a)).toBe(a)
    })
  })
})

describe('transformResponse', () => {
  test('should transform response data to object if data is a json string', () => {
    const a = '{"a":2}'
    expect(transformResponse(a)).toEqual({ a: 2 })
  })
  test('should do nothing if data is a string but not a json string', () => {
    const a = '{a: 2}'
    expect(transformResponse(a)).toBe(a)
  })
  test('should do nothing if data is not a string', () => {
    const a = {a: 2}
    expect(transformResponse(a)).toBe(a)
  })
})
