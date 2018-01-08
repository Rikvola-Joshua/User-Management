import { validateUrl } from '../src/lib/library'

describe('Url validation', () => {
  it('should be a valid string', () => {
    const result = validateUrl('www.google.com');
    expect(result).toBe('http://www.google.com');
  })
})
