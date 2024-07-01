// 1. Напишіть функцію, котра приймає строку як параметр і знаходить найдовше слово у строчці

// function findLongestWord(str) {
//   const words = str.split(" ");
//   let longestWord = "";

//   words.forEach((word) => {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }

// 2. Напишіть функцію, котра приймає число як параметр і повертає перевернуте число

// function reverseNumber(number) {
//   return parseInt(number.toString().split("").reverse().join(""));
// }

// 3. Написати функцію котра буде приймати стрінь значення і повертати нове стрінь значення із символами без повторення

// function unique(str) {
//   const result = [];
//   str.split(" ").forEach((i) => {
//     if (!result.includes(i)) {
//       result.push(i);
//     }
//   });
//   return result.join(" ");
// }

// 4. Написати функцію котра приймає 3 параметри - перемоги, нічиї, поразки і повертає кількість очок команди

// function calcPoints(win, draw, loss) {
//   return win * 2 + draw * 1;
// }

// 5. Написати функцію яка приймає масив як параметр і повертає об'єкт із такими властивостями:
//   Максимальне значення
//   Мінімальне значення
//   Кількість елементів
//   Середнє арифметичне

// function statistics(arr) {
//   let max = -Infinity;
//   let min = Infinity;
//   let sum = 0;
//   let count = 0;

//   arr.forEach(num => {
//     if(num > max) max = num;
//     if (num < min) min = num;
//     sum += num;
//     count++;
//   })

//   const average = sum / count;

//   return {
//     max, min, count, average
//   };

// }

// 6. Написати функцію котра приймає масив робітників команії

const workers = [
  { name: "Jimm", salary: 40000, department: "IT" },
  { name: "Bob", salary: 60300, department: "HR" },
  { name: "Stacy", salary: 15000, department: "IT" },
  { name: "Tom", salary: 55200, department: "DEVOPS" },
  { name: "Kate", salary: 25000, department: "IT" },
  { name: "John", salary: 40000, department: "HR" },
  { name: "Billy", salary: 60000, department: "DEVOPS" },
];

// Функция должна вернуть объект ( Department це підрозділ в якому найбільша середня зарплатня

function highestDepartment(workers) {
  const departmentSalaries = {};
  workers.forEach((worker) => {
    if (!departmentSalaries[worker.department]) {
      departmentSalaries[worker.department] = { sum: 0, count: 0 };
    }
    departmentSalaries[worker.department].sum += worker.salary;
    departmentSalaries[worker.department].count++;
  });

  let highestDepartment = null;
  let highestAverageSalary = 0;

  Object.keys(departmentSalaries).forEach((department) => {
    const averageSalary =
      departmentSalaries[department].sum / departmentSalaries[department].count;
    if (averageSalary > highestAverageSalary) {
      highestAverageSalary = averageSalary;
      highestDepartment = department;
    }
  });
  return { department: highestDepartment, averageSalary: highestAverageSalary };
}

const result = highestDepartment(workers);

console.log(result);
