function checkIfNumberAndFindSumOfNumbersInInterval(number1, number2) {
  if (!isNaN(number1 , number2) && number1 < number2) {
    console.log("both of them are numbers");

    let sum = 0;
    for (let i = number1; i <= number2; i++) {
      sum += i;
    }
    console.log(`Sum of the numbers in the interval of ${number1}-${number2} is: ${sum}`);
    return sum;
  }

  else if (!isNaN(number1 , number2) && number1 > number2) {
    let sum = 0
    for (let i = number2; i <= number1; i++) {
      sum += i;
    }
    console.log(`Sum of the numbers in the interval of ${number2}-${number1} is: ${sum}`);
    return sum;
  }

  else {
    console.log("both of them are not numbers");
  }
}

checkIfNumberAndFindSumOfNumbersInInterval(12, 20);