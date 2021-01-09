/** @hidden */
enum ROMAN_NUMERALS {
  M = 1000,
  CM = 900,
  D = 500,
  CD = 400,
  C = 100,
  XC = 90,
  L = 50,
  XL = 40,
  X = 10,
  IX = 9,
  V = 5,
  IV = 4,
  I = 1,
}

/**
 * Quick helper function that will help you convert a number to a roman numeral for display purposes.
 * @param value The number you want to convert to a roman numeral.
 * @category Helper
 */
export function romanize(value: number): string {
  let roman = "";
  Object.entries(ROMAN_NUMERALS).forEach(([numeral, amount]) => {
    while (value >= amount) {
      roman += numeral;
      // eslint-disable-next-line no-param-reassign
      value -= amount as number;
    }
  });
  return roman;
}
