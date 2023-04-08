import { formatCapitalLetterToUpperCase } from '../formatCapitalLetterToUpperCase';

test('先頭の文字が小文字の場合、先頭の文字が大文字に変換されること', () => {
  const testKeyword = 'mountain';

  expect(formatCapitalLetterToUpperCase(testKeyword)).toBe('Mountain');
});

test('先頭の文字が大文字の場合、先頭の文字が大文字のままであること', () => {
  const testKeyword = 'Star';

  expect(formatCapitalLetterToUpperCase(testKeyword)).toBe('Star');
});
