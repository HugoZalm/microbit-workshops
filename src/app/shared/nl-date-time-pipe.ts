import { Pipe, PipeTransform } from '@angular/core';

/** All dates are shown in Dutch, in Europe/Amsterdam time, regardless of the viewer's time zone. */
const formatter = new Intl.DateTimeFormat('nl-NL', {
  timeZone: 'Europe/Amsterdam',
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

export function formatNlDateTime(value: Date | string | null | undefined): string {
  if (value == null || value === '') {
    return '';
  }
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? '' : formatter.format(date);
}

@Pipe({
  name: 'nlDateTime',
})
export class NlDateTimePipe implements PipeTransform {
  transform(value: Date | string | null | undefined): string {
    return formatNlDateTime(value);
  }
}
