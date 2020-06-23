/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  switch (true) {
    case redemption >= 0 && redemption <= 350:       
      console.log('0%!');       
      break;
    case redemption >= 351 && redemption <= 1350:       
      console.log('15%');      
      break;
    case redemption >= 1351 && redemption <= 2700:      
      console.log('30%');      
      break;
    case redemption >= 2701 && redemption <= 6500:       
      console.log('45%');       
      break;
  }

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let y = 1;

  for (k=1; k <= i; k++) {
    y = k*y;
    console.log ('factorial of ', k, ' = ', y);
  }
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let k = '';

  for (let key of substr) {
    k += key;  
  }
  console.log(k);
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

  const array = Object.values(personIncomes);
  let total = 0;

  for (let income of array) {
    total += income;    
  }
  console.log(total);

}
module.exports = calculateDiscount;