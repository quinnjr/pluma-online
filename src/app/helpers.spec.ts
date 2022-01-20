import { Helpers } from './helpers';

describe('Helpers', () => {
  it('should minimize markdown', async () => {
    const markdown = `
# Test Title

* Test List
* Test List
* Test List`;

    const expected = '\n# Test Title\n* Test List\n* Test List\n* Test List';

    const minimized = await Helpers.compressMarkdown(markdown);

    expect(minimized).toBe(expected);
  });
});
