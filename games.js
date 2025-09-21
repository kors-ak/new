// Общие функции:







































// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// // 1 - Угадай число

// function guessNumberGame() {
//   let randomNumber = getRandomNumber(1, 100);
//   console.log(randomNumber);

//   let taskArray = ['Введи число от 1 до 100 и испытай свою удачу!', 'Брось вызов судьбе! Какое число от 1 до 100 ты выберешь?', 'Испытай свою интуицию! Введи число от 1 до 100 и поймай удачу за хвост!', 'Сможешь ли ты угадать? Введи число от 1 до 100 и покажи, на что способен!', 'Какое число скрывается за завесой тайны? Введи свой вариант от 1 до 100!', 'Введи число от 1 до 100 и посмотрим, угадаешь ли ты!'];
//   let greetingArray = ['Поздраляем, число угадано! Удача сегодня на твоей стороне 😉', 'Верно!', 'Именно так!', 'Ты великолепен!', 'Блестящая победа!'];

//   let userNumber = prompt(`${taskArray[getRandomNumber(0, taskArray.length - 1)]}`);
//   while (true) {
//     if (userNumber == randomNumber) {
//       alert(`${greetingArray[getRandomNumber(0, greetingArray.length - 1)]} Загаданное число: ${randomNumber}`);
//       break;
//     } else if (userNumber === null) {
//       alert(`Ждем тебя снова! \nЗагаданное число было ${randomNumber}`);
//       break;
//     } else  if (userNumber < randomNumber) {
//       userNumber = prompt(`Упс, твое число оказалось меньше загаданного! Попробуй ввести значение больше ⭡`);
//     } else if (userNumber > randomNumber) {
//       userNumber = prompt(`Упс, твое число оказалось больше загаданного! Попробуй ввести значение меньше ⭣`);
//     } else {
//       userNumber = prompt(`Ты уверен, что ввел число? Попробуй еще раз`);
//     }
//   }
// }

// // 2 - Простая арифметика

// function arithmeticGame() {

//   let greetingArray = ['Всё верно!', 'В яблочко!🎯', 'Гениально!', 'У тебя великолепно получается!', 'Как тебе это удается? Решено отлично!', 'Именно так!', 'Идеальное решение'];
//   let tryAgainArray = ['Вариант хороший, но неверный.', 'Почти правильно!', 'Не совсем верно.', 'У тебя обязательно получится!'];
//   let taskArray = ['Попробуй решить такую задачу:', 'Задачка специально для тебя!', 'Найдешь решение для следующей задачи?'];
//   const operationArray = ['+', '-', '*', '/'];

//   let playAgain = true;

//   while (playAgain) {
//     let operation = operationArray[getRandomNumber(0, operationArray.length - 1)];
//     let a;
//     let b;
//     let answer;

//     switch (operation) {
//       case '+':
//         a = getRandomNumber(1, 30);
//         b = getRandomNumber(1, 30);
//         answer = a + b;
//         break;
//       case '-':
//         a = getRandomNumber(1, 30);
//         b = getRandomNumber(1, a);
//         answer = a - b;
//         break;
//       case '*':
//         a = getRandomNumber(1, 12);
//         b = getRandomNumber(0, 12);
//         answer = a * b;
//         break;
//       case '/':
//         b = getRandomNumber(1, 10);
//         answer = getRandomNumber(1, 10);
//         a = b * answer;
//         break;
//     }

//     let task = taskArray[getRandomNumber(0, taskArray.length - 1)];
//     let userAnswer = prompt(`${task} \n${a} ${operation} ${b} = ?`);

//     while (true) {
//       if (userAnswer == null) {
//         playAgain = false;
//         break;
//       } else if (userAnswer == answer) {
//         let greeting = greetingArray[getRandomNumber(0, greetingArray.length - 1)];
//         playAgain = confirm(`${greeting} Продолжаем?`);
//         break;
//       } else {
//         let tryAgain = tryAgainArray[getRandomNumber(0, tryAgainArray.length - 1)];
//         userAnswer = prompt(`${tryAgain} Попробуй решить задачу ещё раз: \n ${a} ${operation} ${b} = ?`);
//       }
//     }
//   }

//   if (playAgain === false) {
//     alert('Ждем тебя снова!');
//   }
// }

// // 3 - Переверни текст

// function textTurnGame() {

//   let taskArray = ['Введи текст, который хочешь прочитать задом наперед:', 'Текст сюда, и он станет с ног на голову!', 'Введи свой текст и посмотри, что получится!', 'Ну-ка, давай текст, посмотрим, как он перевернется!', 'Испытай свой текст на переворот!', 'Введи любой текст, и он будет перевернут', 'Дай-ка мне текст, и я его переверну!', 'Введи текст, и он станцует задом наперед!', 'Какой текст станет самым забавным задом наперед? Попробуй!', 'Готов перевернуть свой текст? Вводи его!'];
//   let greetingArray = ['Та-дам! Вот что получилось:', 'Вуаля, твой текст перевернулся:', 'Вот это поворот!', 'Магия переворота сработала!', 'Вот твой текст, но с другой стороны!', 'Абракадабра! Текст перевернулся!', 'Трансформация завершена!', 'Твой текст совершил путешествие на обратную сторону!', '🤪 Что-то пошло не так... или так?', 'Поздравляю, твой текст теперь говорит на другом языке!'];

//   let playAgain = true;

//   while (playAgain) {
//     let userAnswer = prompt(`${taskArray[getRandomNumber(0, taskArray.length - 1)]}`);
//     if (userAnswer === null) {
//       alert('Ждем тебя снова!');
//       break;
//     }
//     let result = userAnswer.split('').reverse().join('');
//     let greeting = greetingArray[getRandomNumber(0, greetingArray.length - 1)];
//     playAgain = confirm(`${greeting} \n${result} \nПродолжаем?`);
//   }

//   if (!playAgain) {
//     alert('Ждем тебя снова!');
//   }
// }

// // 4 - Викторина

// function quizGame() {

//   const quiz = [
//     {
//       question: "Какого цвета небо?",
//       options: ["1. Красного", "2. Синего", "3. Зеленого"],
//       correctAnswer: 2
//     },
//     {
//       question: "Сколько дней в неделе?",
//       options: ["1. Шесть", "2. Семь", "3. Восемь"],
//       correctAnswer: 2
//     },
//     {
//       question: "Сколько у человека пальцев на одной руке?",
//       options: ["1. Четыре", "2. Пять", "3. Шесть"],
//       correctAnswer: 2
//     },
//     {
//       question: "Какая самая большая птица в мире?",
//       options: ["1. Орел", "2. Страус", "3. Пингвин"],
//       correctAnswer: 2
//     },
//     {
//       question: "Сколько сторон у шестиугольника?",
//       options: ["1. Пять", "2. Шесть", "3. Семь"],
//       correctAnswer: 2
//     },
//     {
//       question: "Какой месяц имеет 28 дней?",
//       options: ["1. Февраль", "2. Январь", "3. Каждый месяц"],
//       correctAnswer: 3
//     },
//     {
//       question: "Какой сериал подарил нам мем 'Ждун'?",
//       options: ["1. Игра престолов", "2. Друзья", "3. Никакой сериал, это скульптура"],
//       correctAnswer: 3
//     },
//   ];
//   let score = 0;
//   let play = true;

//   for (let i = 0; i < quiz.length; i++) {
//     let userAnswer = prompt(`${quiz[i].question} \n${quiz[i].options.join('\n')}`);

//     while (userAnswer === '') {
//       userAnswer = prompt(`Ты ничего не ввел. Попробуй еще раз! \n${quiz[i].question} \n${quiz[i].options.join('\n')}`);
//     }

//     if (userAnswer === null) {
//       play = false;
//       break;
//     } else if (+userAnswer === quiz[i].correctAnswer || quiz[i].options[quiz[i].correctAnswer - 1].toLowerCase().includes(userAnswer.toLowerCase())) {
//       score++;
//       alert(`Верно! \nОсталось вопросов: ${quiz.length - (i + 1)}`);
//     } else {
//       alert(`Почти! \nПравильный ответ: ${quiz[i].options[quiz[i].correctAnswer - 1]} \nОсталось вопросов: ${quiz.length - (i + 1)}`);
//     }
//   }

//   while (play) {
//     if (score === 0) {
//       alert(`Ты избежал все правильные ответы - поразительная удача! \nРезультат: ${score}/${quiz.length}. Попробуй ещё раз!`);
//     } else if (score <= 4) {
//       alert(`Ты ответил правильно на ${score} вопроса из ${quiz.length}. Каждая попытка – это ценный опыт! Не сдавайся!`);
//     } else if (score === quiz.length) {
//       alert(`Превосходно! Ты ответил правильно на все ${score} вопросов из ${quiz.length}. Поздравляем 🏆`);
//     } else {
//       alert(`Ты справился достойно! Попробуй ещё раз, и результат тебя порадует! \nТы ответил правильно на ${score} вопросов из ${quiz.length}`);
//     }
//     break;
//   }

//   if (!play) {
//     alert(`Ждем тебя снова!`);
//   }
// }

// // 5 - Камень, ножницы, бумага

// function rockPaperScissorsGame() {
//   const choices = ['камень', 'ножницы', 'бумага'];
//   const taskArray = ['Введи свой выбор: камень, ножницы или бумага', 'Готов проверить, кто выиграет в этом раунде? Выбери: камень, ножницы или бумага', 'Сыграем! Выбери: камень, ножницы или бумага', 'Какое орудие выберешь сегодня: камень, ножницы или бумага?', 'Твой ход, стратег! Выбери мудро: камень, ножницы или бумага', 'Не дай компьютеру одолеть себя! Выбери: камень, ножницы или бумага', 'Покажи свою силу! Выбери свой ход: камень, ножницы или бумага', 'Какой из символов принесёт тебе победу? Выбери: камень, ножницы или бумага'];
//   const winArray = ['Ты победил! Держи медальку 🏅', 'Победа за тобой!', 'Браво! Вы одержали победу над машиной! 🥳', 'Ура! Компьютер повержен! Ты великолепен! ✨', 'Вот это да! Какая победа! Ты настоящий мастер 😎', 'Сногсшибательная победа! Поздравляем!', 'Компьютер проиграл в этой схватке! Твоя победа!', 'Компьютер повержен! Кажется, кто-то недооценил человеческий разум!', 'Ты доказал свое превосходство!', 'У компьютера сегодня не задался день... Зато у тебя всё отлично! Поздравляем!'];
//   const lossArray = ['На этот раз победил компьютер.', 'Поражение тоже опыт. Удачи в следующий раз!', 'К сожалению, твой выбор не сработал.', 'В этот раз компьютер оказался хитрее.', 'Не отчаивайся, попробуй еще раз и покажи компьютеру, на что способен!', 'Ну, ничего страшного, бывает и такое. Зато теперь ты знаешь, что компьютер тоже умеет играть!', 'Компьютер торжествует, но мы знаем, что вы можете его победить!'];
//   const drawArray = ['Ничья! 🤝', 'Твой выбор и выбор компьютера совпали, ничья.', 'Тактическая ничья!', 'Ничья – это шанс показать, кто сильнее в следующий раз!', 'Это была напряженная игра, ничья – заслуженный итог!', 'Оба игрока оказались на высоте, ничья!'];

//   function addEmoji(item) {
//     switch (item) {
//       case 'камень':
//         return 'камень ✊';
//       case 'ножницы':
//         return 'ножницы ✌️';
//       case 'бумага':
//         return 'бумага ✋';
//       default:
//         return item + ' 🌟';
//     }
//   }

//   function determineWinner(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//       return drawArray[getRandomNumber(0, drawArray.length - 1)];
//     } 
//     if ((userChoice === 'камень' && computerChoice === 'ножницы') || (userChoice === 'ножницы' && computerChoice === 'бумага') || (userChoice === 'бумага' && computerChoice === 'камень')) {
//       return winArray[getRandomNumber(0, winArray.length - 1)];
//     } else {
//     return lossArray[getRandomNumber(0, lossArray.length - 1)];
//     }
//   }

//   let play = true;

//   while (play) {
//     const computerChoice = choices[getRandomNumber(0, choices.length - 1)];
//     console.log(computerChoice);

//     let userChoice = prompt(`${taskArray[getRandomNumber(0, taskArray.length - 1)]}`);
//     if (userChoice === null) {
//       play = false;
//       break;
//     }
    
//     userChoice = userChoice.toLowerCase();

//     while (!choices.includes(userChoice)) {
//       userChoice = prompt('Некорректный выбор! Пожалуйста, выбери камень, ножницы или бумагу');
//       if (userChoice === null) {
//         play = false;
//         break;
//       }
//       userChoice = userChoice.toLowerCase();
//     }
//     if (!play) break;

//     const result = determineWinner(userChoice, computerChoice);
//     play = confirm(`Твой выбор: ${addEmoji(userChoice)} \nВыбор компьютера: ${addEmoji(computerChoice)} \n${result} Продолжаем?`);
//   }

//   if (!play) {
//     alert('Ждем тебя снова!');
//   }
// }

// // 5 - Генератор случайных цветов

// function randomColorGeneratorGame() {
//   const sectionEl = document.querySelector('.game6');
//   const textEl = document.getElementById('colorGenerator')
//   let newColor = getRandomColor();

//   sectionEl.style.backgroundColor = newColor;
//   textEl.textContent = `Текущий цвет фона: ${newColor}`;
// }