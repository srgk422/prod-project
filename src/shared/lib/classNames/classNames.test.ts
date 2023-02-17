import { classNames } from './classNames';

describe('classNames', () => {
  test('with single class', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });
  test('with additional class', () => {
    const expected = 'mainClass extraClass1 extraClass2';
    expect(classNames('mainClass', {}, ['extraClass1', 'extraClass2'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'mainClass hovered scrollable extraClass1 extraClass2';
    expect(classNames(
      'mainClass',
      { hovered: true, scrollable: true },
      ['extraClass1', 'extraClass2'],
    )).toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'mainClass scrollable extraClass1 extraClass2';
    expect(classNames(
      'mainClass',
      { hovered: false, scrollable: true },
      ['extraClass1', 'extraClass2'],
    )).toBe(expected);
  });
});
