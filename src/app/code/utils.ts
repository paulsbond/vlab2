export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function decimal_places(x: number): number {
  if (Math.floor(x.valueOf()) === x.valueOf()) return 0;
  return x.toString().split('.')[1].length || 0;
}

export function round(value: number, ndigits: number = 0): number {
  var multiplier = Math.pow(10, ndigits);
  return Math.round(value * multiplier) / multiplier;
}
