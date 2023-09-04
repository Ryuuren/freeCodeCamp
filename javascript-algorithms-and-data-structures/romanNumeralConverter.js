const convertToRoman = (num) => {
  // We first initialise an empty string, to store the equivalent roman numeral conversion.
  let romanNumerals = "";

  // We continue processing the given num whilst it is greater than 0.
  while (num > 0) {
    switch (true) {
      // Each switch case checks if the current num value is greater than or equal to x amount
      // If so, add the corresponding letter to the romanNumerals variable...
      // ...then decrement the current num value by the x amount.
      // This ensures that as the num is decremented down to zero...
      // ...the proper characters are only added the right amount of times.
      case num >= 1000:
        romanNumerals += "M";
        num -= 1000;
        break;
      case num >= 900:
        romanNumerals += "CM";
        num -= 900;
        break;
      case num >= 500:
        romanNumerals += "D";
        num -= 500;
        break;
      case num >= 400:
        romanNumerals += "CD";
        num -= 400;
        break;
      case num >= 100:
        romanNumerals += "C";
        num -= 100;
        break;
      case num >= 90:
        romanNumerals += "XC";
        num -= 90;
        break;
      case num >= 50:
        romanNumerals += "L";
        num -= 50;
        break;
      case num >= 40:
        romanNumerals += "XL";
        num -= 40;
        break;
      case num >= 10:
        romanNumerals += "X";
        num -= 10;
        break;
      case num >= 9:
        romanNumerals += "IX";
        num -= 9;
        break;
      case num >= 5:
        romanNumerals += "V";
        num -= 5;
        break;
      case num >= 4:
        romanNumerals += "IV";
        num -= 4;
        break;
      case num >= 1:
        romanNumerals += "I";
        num -= 1;
        break;
    }
  }

  return romanNumerals;
};

console.log(convertToRoman(2));
