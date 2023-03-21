export const toBoolean = (value: any): boolean => {
  return /^(true|1)$/i.test(value);
};
