// 1. Вивести одним рядком мінімальне значення масиву за допомогою деструктуризації та Math
const array = [1, 2, 3, 4, 6, 710, 34013, 13];

console.log(Math.min(...array));

// 2. Функція multiply не приймає явно ніяких параметрів
function multiply() {
  return [...arguments].reduce((a, b) => a * b, 1);
}

console.log(multiply(100, 200, 83902, 1230));

// В результаті має повернутися число, котре є результатом множення усіх аргументів переданих у функцію

// 3. У нас є функція totalPrice - за допомогою деструктуризації об'єкту зробити так, що б функція працювала
const product = {
  productName: "Water",
  price: 20,
  count: 3,
};

function totalPrice({ price, count }) {
  return price * count;
}

console.log(totalPrice(product));

// 4. Написати об'єкт у котрому буде властивість items ( спочатку пустий масив)
// метод об'єкту setItems котрий приймає масив значень і встановлює цей масив як значення властивості items
// метод об'єкту sum котрий повертає суму усіх елементів масиву items
// метод maxValue еотрий поверає максимальне значення з масиву items з використанням деструктуризації масиву

const calculator = {
  items: [],

  setItems(arr) {
    this.items = arr;
  },

  sum() {
    return this.items.reduce((acc, current) => acc + current, 0);
  },

  maxValue() {
    return Math.max(...this.items);
  },
};

calculator.setItems([1, 2, 3, 4, 5]);

console.log(calculator.sum());
console.log(calculator.maxValue());

// 5. Написати функционал так, що б при виклику showPrediction виводилась випадковий вираз з масиву predictArr
// кожні 3 секунди
// Додати метод для зупинки роботи виводу виразів

const predictsArr = [
  "Удача прийде звідки не чекаєте.",
  "Давні борги будуть повернуті вам.",
  "Вас чекає несподіване грошове надходження.",
  "Всі незакінчені справи будуть завершені.",
  "Яскрава пригода вже чекає на вас.",
  "Планування часу допоможе вам не запізнитися на зустріч.",
  "Інтуїція цього разу не підведе вас. Використовуйте це.",
  "Прислухайтеся до себе і відповідь на запитання буде знайдено.",
  "З'явиться можливість вирушити в дорогу.",
  "Ваш цінний досвід зможе комусь допомогти, якщо перестанете його ховати в собі.",
  "Вам не вдасться сподобатися всім, не витрачайте на це енергію.",
  "Одяг, який вас старить, не дістанеться вам.",
];

const obj = {
  predictions: [],
  setPredictions(arr) {
    this.predictions = arr;
  },
  showPrediction() {
    if (this.intervalId) return; // если уже запущен интервал, не запускать снова
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.predictions.length);
      console.log(this.predictions[randomIndex]);
    }, 3000);
  },
  stopPrediction() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },
};

const predictions = obj;
predictions.setPredictions(predictsArr);

predictions.showPrediction();

// predictions.stopPrediction();
