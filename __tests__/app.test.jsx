import UserDetail from '../src/container/user-detail'

describe('UrlValidation', () => {
  it('should be a valid string', () => {
    const result = UserDetail.validateUrl("www.google.com")
    exept (result).toBe("http://www.google.com")
  })
})
