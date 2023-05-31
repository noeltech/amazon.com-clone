export function getDecimalValue(value) {
  if (!value) return;

  let stringValue = value.toString().split(".");
  return stringValue[1];
}
