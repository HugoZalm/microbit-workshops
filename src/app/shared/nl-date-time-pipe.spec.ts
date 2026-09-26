import { NlDateTimePipe } from './nl-date-time-pipe';

describe('NlDateTimePipe', () => {
  const pipe = new NlDateTimePipe();

  it('formats in Europe/Amsterdam summer time (UTC+2)', () => {
    expect(pipe.transform('2026-07-01T08:30:00Z')).toContain('10:30');
  });

  it('formats in Europe/Amsterdam winter time (UTC+1)', () => {
    expect(pipe.transform('2026-01-15T08:30:00Z')).toContain('09:30');
  });

  it('uses Dutch month names', () => {
    expect(pipe.transform('2026-10-03T10:00:00Z')).toContain('okt');
  });

  it('returns an empty string for missing or invalid input', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
    expect(pipe.transform('not a date')).toBe('');
  });
});
