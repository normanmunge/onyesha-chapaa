export function isValidNumber(value: any) {
  return !isNaN(value) && value > 0;
}

export function isValidDate(value: any) {
  return (
    !isEmpty(value) &&
    value.trim().length > 0 &&
    value.toString() !== 'Invalid Date'
  );
}

export function isValidString(value: any) {
  return !isEmpty(value) && value.trim().length > 0;
}

export function isEmpty(value: any) {
  switch (value) {
    case typeof value === 'string':
      return value.trim().length <= 0;
    case typeof value === 'object':
      if (Object.keys(value).length <= 0) {
        return true;
      } else if (value && value.length <= 0) {
        return true;
      }
    default:
      break;
  }
}
