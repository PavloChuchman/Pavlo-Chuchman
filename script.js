// // 1 Task
// function createArray(start, end) {
//     if (typeof start !== 'number' || typeof end !== 'number') {
//       throw new Error('Both start and end values must be numbers');
//     }
    
//     if (start > end) {
//       throw new Error('Start value should be less than or equal to end value');
//     }
    
//     const result = [];
    
//     for (let i = start; i <= end; i++) {
//       result.push(i);
//     }
    
//     return result;
//   }
  
//   const arr = createArray(2, 9);
//   console.log(arr); 

//   // Task 2

//   function printNumbers(a, b) {
//     if (a >= b) {
//       throw new Error('The condition a < b must be satisfied');
//     }
  
//     for (let i = a; i <= b; i++) {
//       const frequency = i - a + 1;
//       for (let j = 0; j < frequency; j++) {
//         console.log(i);
//       }
//     }
//   }
  
//   const a = 2;
//   const b = 5;
//   printNumbers(a, b);

//   // Task 3

//   function randArray(k) {
//     const result = [];
  
//     for (let i = 0; i < k; i++) {
//       const randomNumber = Math.floor(Math.random() * 500) + 1;
//       result.push(randomNumber);
//     }
  
//     return result;
//   }
  
//   const randomNumbers = randArray(5);
//   console.log(randomNumbers); 

//   //Task 4
//   function compact(arr) {
//     const result = [];
  
//     for (const element of arr) {
//       if (!result.includes(element)) {
//         result.push(element);
//       }
//     }
  
//     return result;
//   }
  
//   const arr = [5, 3, 4, 5, 6, 7, 3];
//   const arr2 = compact(arr);
//   console.log(arr2);

//   // Task 6
//   function calc(a, b, op) {
//     if (op === 1) {
//       return a - b;
//     } else if (op === 2) {
//       return a * b;
//     } else if (op === 3) {
//       if (b !== 0) {
//         return a / b;
//       } else {
//         throw new Error('Division by zero is not allowed');
//       }
//     } else {
//       return a + b;
//     }
//   }
  
//   console.log(calc(10, 3, 1));

//   //Task 7 
//   function findUnique(arr) {
//     const uniqueSet = new Set();
  
//     for (const element of arr) {
//       if (uniqueSet.has(element)) {
//         return false;
//       }
//       uniqueSet.add(element);
//     }
  
//     return true;
//   }
  
//   console.log(findUnique([1, 2, 3, 5, 3]));  
//   console.log(findUnique([1, 2, 3, 5, 11]));



//LESSON 4. DEBUGGING. HANDLING EXCEPTIONS
//Task 1
function sumSliceArray(arr, first, second) {
  if (!Number.isInteger(first) || !Number.isInteger(second)) {
      throw new Error("Both 'first' and 'second' should be integers.");
  }
  
  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
      throw new Error("Index values are out of bounds.");
  }

  return arr[first] + arr[second];
}

try {
  const inputArr = [1, 2, 3, 4, 5, 6, 7];
  const firstIndex = parseInt(prompt("Введіть перший індекс: "));
  const secondIndex = parseInt(prompt("Введіть другий індекс: "));
  
  const result = sumSliceArray(inputArr, firstIndex, secondIndex);
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
}
// Task 2
function checkAge() {
  try {
      const name = prompt("Введіть ваше ім'я:");
      if (!name) {
          throw new Error("The field is empty! Please enter your name.");
      }

      const age = parseInt(prompt("Введіть ваш вік:"));
      if (isNaN(age)) {
          throw new TypeError("Age should be a number.");
      }
      if (age < 18 || age > 70) {
          throw new RangeError("Your age is not within the allowed range.");
      }

      const status = prompt("Введіть ваш статус (адмін, модератор, користувач):");
      if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
          throw new EvalError("Invalid status entered.");
      }

      alert("Ви маєте доступ до перегляду фільму.");
  } catch (error) {
      alert("Помилка: " + error.name + "\n" + error.message);
  }
}

checkAge();
//Task 3 
function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
      throw new TypeError("Both width and height should be numbers.");
  }
  
  return width * height;
}


try {
  const widthInput = parseFloat(prompt("Введіть ширину прямокутника:"));
  const heightInput = parseFloat(prompt("Введіть висоту прямокутника:"));
  
  const area = calcRectangleArea(widthInput, heightInput);
  console.log("Площа прямокутника:", area);
} catch (error) {
  console.error("Помилка:", error.message);
}


