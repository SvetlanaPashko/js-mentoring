/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof str == 'string') {
    let arr = str.split('').reverse().join('');
    return arr;
  } else {
    return ('This is not a string!');
  }
}


/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  if (typeof year == 'number') {
    let century = year.toString().slice(0, 2);
    let decade = year.toString().slice(2);
    switch (decade) {
      case decade = '00':
        return Number(century)
        break;

      default:
        return Number(century) + 1
        break;
    }
  } else {
    return 'It is not a number';
  }
}


/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  return str.split('').filter(element => (element === char)).length;
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  let arrString = str.split('');
  if (arrString.length > num) {
    arrString.splice(num, arrString.length - num);
    arrString.push('...');
    return arrString.join('');
  } else return str;
}


/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  return text.replace(/10/g, 'ten');
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  return found = text.replace(/\[(.*?)\]/g, '[CONFIDENTIAL]');
}


module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};