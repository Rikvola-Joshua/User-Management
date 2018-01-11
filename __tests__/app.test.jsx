import { validateUrl } from '../src/lib/library'

describe('URL Validation', () => {
  it('if the url need a protocol', () => {
    const result = validateUrl('www.google.com');
    expect(result).toBe('http://www.google.com');
  })
  it('if the given string is empty the return should be as well.', () =>{
    const result = validateUrl('');
    expect(result).toBe('');
  })
})
describe('Input Validation', () => {
  
});
