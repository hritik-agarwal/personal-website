const long = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

/** 14 August 2026 */
export const formatDate = (date: Date) => long.format(date);

/** 2026-08-14, for datetime attributes */
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
