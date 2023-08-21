// 1 Task
function createArray(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
      throw new Error('Both start and end values must be numbers');
    }
    
    if (start > end) {
      throw new Error('Start value should be less than or equal to end value');
    }
    
    const result = [];
    
    for (let i = start; i <= end; i++) {
      result.push(i);
    }
    
    return result;
  }
  
  const arr = createArray(2, 9);
  console.log(arr); 

  // Task 2

  function printNumbers(a, b) {
    if (a >= b) {
      throw new Error('The condition a < b must be satisfied');
    }
  
    for (let i = a; i <= b; i++) {
      const frequency = i - a + 1;
      for (let j = 0; j < frequency; j++) {
        console.log(i);
      }
    }
  }
  
  const a = 2;
  const b = 5;
  printNumbers(a, b);

  // Task 3

  function randArray(k) {
    const result = [];
  
    for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      result.push(randomNumber);
    }
  
    return result;
  }
  
  const randomNumbers = randArray(5);
  console.log(randomNumbers); 

  //Task 4
  function compact(arr) {
    const result = [];
  
    for (const element of arr) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
  
    return result;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2);

  // Task 6
  function calc(a, b, op) {
    if (op === 1) {
      return a - b;
    } else if (op === 2) {
      return a * b;
    } else if (op === 3) {
      if (b !== 0) {
        return a / b;
      } else {
        throw new Error('Division by zero is not allowed');
      }
    } else {
      return a + b;
    }
  }
  
  console.log(calc(10, 3, 1));

  //Task 7 
  function findUnique(arr) {
    const uniqueSet = new Set();
  
    for (const element of arr) {
      if (uniqueSet.has(element)) {
        return false;
      }
      uniqueSet.add(element);
    }
  
    return true;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3]));  
  console.log(findUnique([1, 2, 3, 5, 11]));