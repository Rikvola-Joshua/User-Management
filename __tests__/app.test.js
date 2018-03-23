import { validateUrl } from '../src/lib/library'

describe('URL Validation', () => {
  it('should prepend the "http" protocol correctly', () => {
    const result = validateUrl('www.google.com');
    expect(result).toBe('http://www.google.com');
  })

  it('should return the same url if "https" protocol is provided', () => {
    const result = validateUrl('https://www.google.com');
    expect(result).toBe('https://www.google.com');
  })

  it('should prepend the "HTTP" protocol correcty', () => {
    const result = validateUrl('HTTP://www.google.com');
    expect(result).toBe('HTTP://www.google.com');
  })

  it('if the given string is empty the return should be as well.', () =>{
    const result = validateUrl('');
    expect(result).toBe('');
  })
})
