import { createDateFormat, formatDuration, formatTime } from '../../utils/utils';

describe('Utils', () => {
  test('createDateFormat', () => {
    const date = new Date();
    const result = createDateFormat(date.toISOString());
    expect(typeof result).toEqual('number');
  });
  test('formatDuration', () => {
    const result = formatDuration('01:00:00');
    expect(typeof result).toEqual('string');
  });
  test('formatTime', () => {
    const date = createDateFormat('2023/01/01 01:20:00');
    const result = formatTime(date);
    expect(typeof result).toEqual('string');
  });
});

