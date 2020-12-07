export const getFullDateTimeFormat = (value: string) => {
  return new Intl.DateTimeFormat('en-GB', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
};

export default getFullDateTimeFormat;
