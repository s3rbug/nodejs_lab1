# Лабораторна робота №1

## Задачі на [Codewars](https://www.codewars.com/) (усі задачі мають складність ***6 kyu***)

### Задача [Does my number look big in this?](https://www.codewars.com/kata/5287e858c6b5a9678200083c)

> [Посилання](https://www.codewars.com/kata/reviews/615a651ab04c890001d78688/groups/63f1190cbc60d20001fc7553) на її розв'язок

### Задача [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

> [Посилання](https://www.codewars.com/kata/reviews/5e01760a4ebc2000018ad74d/groups/639d9f79d379e90001a862cb) на її розв'язок

### Задача [Stop gninnipS My sdroW](https://www.codewars.com/kata/5264d2b162488dc400000001)

> [Посилання](https://www.codewars.com/kata/reviews/59b795d5f904457161000db5/groups/63ed770e5060fe0001cbc68d) на її розв'язок

### Задача [Multiples of 3 or 5](https://www.codewars.com/kata/514b92a657cdc65150000006)

> [Посилання](https://www.codewars.com/kata/reviews/5787e59d19383a43460000d1/groups/63ed6bfb8db4a800010adac2) на її розв'язок

## Контрольні питання

1. Чи є різниця між виконанням JavaScript в браузері та в середовищі Node.js?

     Одна з головних відмінностей полягає у тому, що браузери та Node.js використовують різні середовища виконання JavaScript. У браузерах JavaScript виконується в контексті веб-сторінки, тоді як у Node.js виконання відбувається в середовищі сервера, через це є різниця у доступних API та бібліотеках.

     Браузери мають свої власні API та бібліотеки, такі як Document Object Model (DOM), що дозволяє JavaScript взаємодіяти з HTML та CSS, а також Web APIs, такі як Fetch API та Web Storage API.

     У Node.js відсутні DOM та Web APIs, але замість цього він має доступ до вбудованих модулів, таких як fs (для роботи з файлами), http (для роботи з HTTP-запитами), та інших.

     Крім того, у Node.js є можливість використовувати пакетний менеджер npm для управління залежностями та встановлення пакетів, що дозволяє легко додавати сторонні бібліотеки до проекту.

2. Назвіть основні типи в JavaScript

      Рядки (string) - використовуються для представлення текстової інформації. Рядки вказуються в лапках, можуть містити будь-які символи та пробіли. Приклад: "Hello, world!".

      Числа (number) - використовуються для представлення числових значень. Числа можуть бути цілими (наприклад, 42) або з плаваючою точкою (наприклад, 3.14).

      Булеві значення (boolean) - використовуються для представлення двох можливих значень: true (істина) та false (хиба). Булеві значення використовуються в логічних операціях.

      Масиви (array) - використовуються для зберігання декількох значень в одному місці. Масиви створюються за допомогою квадратних дужок та можуть містити будь-які типи даних. Приклад: [1, 2, 3].

      Об'єкти (object) - використовуються для зберігання пов'язаної інформації в одному місці. Об'єкти створюються за допомогою фігурних дужок та складаються з ключів та значень. Ключі використовуються для доступу до значень. Приклад: {name: "John", age: 30}.

      Функції (function) - використовуються для зберігання повторюваного коду та для виконання різних операцій. Функції можуть бути викликані з різними параметрами, що дозволяє їм виконувати різні завдання. Приклад: function sum(a, b) {return a + b;}.

      Нульове значення (null) - використовується для позначення відсутності значення. Наприклад, якщо змінна не має значення, їй можна присвоїти null.

      Не визначене значення (undefined) - використовується для позначення змінної, яка не має значення.

3. Як працює замикання (closure) в JavaScript
     Замикання (closure) - це механізм JavaScript, що дозволяє зберігати стан функції та її локальні змінні, незалежно від місця виклику функції. Це досягається за допомогою створення функції всередині іншої функції.

     Коли функція створюється всередині іншої функції, вона може отримати доступ до змінних в зовнішній функції, навіть після того, як зовнішня функція виконана та повернула результат. При цьому, змінні зберігаються в замиканні (closure) функції, що була створена всередині зовнішньої функції.

     Наприклад, розглянемо такий код:

    ```javascript
    function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
    }

    let innerFunc = outerFunction();
    innerFunc(); // 10
    ```

     У цьому прикладі, зовнішня функція outerFunction містить внутрішню функцію innerFunction, яка має доступ до змінної outerVariable, яка знаходиться в зовнішній функції. Коли зовнішня функція викликається та повертається результат, внутрішня функція все ще має доступ до змінної outerVariable. В результаті, при виклику внутрішньої функції innerFunc(), вона виводить 10, яку зберігла у замиканні.

     Замикання дозволяє створювати функції, які можуть зберігати стан та діяти як об'єкти, що дозволяє використовувати їх для різних завдань, таких як реалізація приватних змінних, мемоізації функцій та інших.

4. Назвіть основні стандартні бібліотеки Node.js

     http - ця бібліотека дозволяє створювати HTTP-сервери та клієнти, що дозволяє обмінюватися даними за допомогою протоколу HTTP.

     fs - ця бібліотека дозволяє зчитувати та записувати файли на файлову систему.

     path - ця бібліотека дозволяє працювати з шляхами до файлів та папок на файловій системі.

     crypto - ця бібліотека містить криптографічні функції, такі як хешування та шифрування.

     stream - ця бібліотека дозволяє працювати з потоками даних, такими як файли, мережеві підключення та інші.

     os - ця бібліотека дозволяє отримувати інформацію про операційну систему, на якій виконується Node.js, таку як кількість ядер процесора, пам'ять та інші.

     util - ця бібліотека містить допоміжні функції, такі як конвертація типів даних, робота з об'єктами та інші.

     Це не повний перелік бібліотек, що містяться в Node.js, але ці бібліотеки є основними і часто використовуються у Node.js додатках.

5. Які є способи імпортувати модулі в Node.js?

      Використання require(): цей метод є стандартним способом імпортування модулів у Node.js. Він виглядає так: const module = require('module-name');. Він завантажує модуль із зазначеним ім'ям та присвоює його змінній module.

      Використання import: цей спосіб є новішим та більш сучасним в Node.js, він підтримується з версії Node.js 14+. Він виглядає так: import module from 'module-name';. Цей спосіб імпортування використовує стандарт ES6, тому він не підтримується в старих версіях Node.js.

      Використання import() динамічного імпорту: цей спосіб дозволяє завантажувати модулі динамічно за запитом. Він виглядає так: import('module-name').then(module => { // ... });. Цей спосіб є новішим та більш гнучким, ніж стандартний require(), оскільки він дозволяє завантажувати модулі під час виконання програми.

      Використання глобального об'єкту global: цей спосіб дозволяє створювати глобальні змінні, які можна використовувати у всіх модулях. Він виглядає так: global.module = require('module-name');. Використання цього способу не є рекомендованим, оскільки воно може призвести до конфліктів імен змінних у різних модулях.

      Використання module.exports: цей спосіб дозволяє експортувати функції або об'єкти з модуля для використання в інших модулях. Він виглядає так: module.exports = { ... };. Цей спосіб дозволяє створювати більш складні модулі з власними методами та функціями.

6. Як пов'язані Google Chrome / Chromium та Node.js?

     Google Chrome та Chromium - це веб-браузери, які використовуються для відображення веб-сторінок та виконання JavaScript коду. Node.js - це середовище виконання JavaScript поза браузером, що дозволяє виконувати JavaScript код на сервері.

     Google Chrome та Chromium використовують рушій виконання JavaScript V8, який розробляється Google. Node.js також використовує рушій V8 для виконання JavaScript коду. За допомогою V8, Node.js дозволяє розробникам створювати високопродуктивні серверні додатки на JavaScript.

     Крім того, Chrome та Chromium використовують JavaScript для розширення функціональності браузера, такої як розширення, анімації та інші функції. Node.js також має власну бібліотеку модулів, що дозволяє розробникам створювати різноманітні програми, включаючи веб-сервери, API, інструменти командного рядка та інші застосування.

     Таким чином, Google Chrome / Chromium та Node.js пов'язані через використання рушія виконання JavaScript V8 та можуть використовуватись для створення різних видів додатків та інструментів.

7. Як можна дозволити імпортувати змінні з поточного модуля?
     У Node.js, для того щоб імпортувати змінні з поточного модуля, потрібно використати ключове слово exports.

     Наприклад, якщо в поточному модулі є змінна foo, яку потрібно експортувати, то це можна зробити за допомогою наступного коду:

     ```javascript
     // Поточний модуль
     const foo = 'Hello World';

     exports.foo = foo;
     ```

     У іншому модулі, який хоче імпортувати змінну foo, можна зробити це за допомогою наступного коду:

     ```javascript
     // Інший модуль
     const currentModule = require('./currentModule');

     console.log(currentModule.foo); // 'Hello World'
     ```

     Тут ми імпортуємо поточний модуль за допомогою require та використовуємо змінну foo, яку ми експортували.
