//Зарплата вечернего уборщика в городской поликлинике 40000 рублей,
//а педагога по вокалу 22000 рублей.
//Выведите в консоль сколько может зарабатывать вечерний уборщик, имея голос и педагогическое образование?
const salaryСleaner = 40000;
const salaryТeacher = 22000;
const amountMoney = salaryСleaner + salaryТeacher;
console.log(amountMoney); // 62000

//Сложите слово 'Владивосток' и число 2000, а также добавьте между ними пробел,
//чтобы получилось название известной песни. Результат выведите в консоль.
const nameСity = "Владивосток ";
const number = 2000;
const addition = nameСity + number;
console.log(addition); // Владивосток 2000

//Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере,
//254 минуты лайкала фотокарточки,
//137 минут читала статьи ВКонтакте
//и 201 минуту смотрела стендапы на YouTube.
//Выведите в консоль, сколько часов прокрастинировала Русалка.
const timeMessenger = 128;
const likePhoto = 254;
const readPostsVK = 137;
const seeYouTube = 201;
const totalTimeMinutes = timeMessenger + likePhoto + readPostsVK + seeYouTube;
const totalTimeHours = totalTimeMinutes / 60;
console.log(totalTimeHours); // 12

// Возведите число 2 в 5 степень.
console.log(2 ** 5); //32

//Выведите в консоль строку:
const text =
  "Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(text);

//У вас есть две переменные
//Склейте значение этих двух переменных и выведите на экран значение Привет, Кот
const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}`);

//Представьте: турист из Пскова прилетел в Москву и заказал автомобиль до хостела. Вы в роли программы-навигатора.
let timeNav = 34;
console.log("Старт поездки. Осталось минут: " + timeNav);
timeNav -= 15;
console.log("Старт поездки. Осталось минут: " + timeNav);
timeNav -= 10;
console.log("Старт поездки. Осталось минут: " + timeNav);
timeNav -= 9;
console.log("Старт поездки. Осталось минут: " + timeNav);
console.log("Вы приехали. Добро пожаловать в Москву!");

//Объявите переменную с именем fahrenheitи положите в неё значение 451.
//Добавьте новую переменную celsiusи запишите в неё значение,
//рассчитанное по формуле перевода температуры из градусов по Фаренгейту в градусы Цельсия:
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(
  `${fahrenheit}градуса по Фаренгейту — это ${celsius} градуса по Цельсию.`
);

//Задание со звездочкой **
// p.s. сделала как умею :)

//На основе имеющихся констант и переменных сформировать и вывести в Console сообщения в следующем порядке:
const deposit = 30000;
const percent = 18.5;
const growth = 150;
console.log(
  `Ваш депозит на начало расчётного периода составлял ${deposit} руб.`
);
console.log(`Согласно вашему тарифу, вам была присвоена ставка ${percent}%`);
console.log(
  `К концу расчётного периода прирост составил ${growth} руб., и на данный момент ваш депозит составляет ${
    deposit + growth
  } руб.`
);

//Пользователь должен ввести сумму, которую он хочет внести на вклад.
//В итого выведите фразу «Через год у вас будет XXX руб. на счету» где вместо ХХХ выведите сколько получится на счету
//с учётом процентной ставки 7% годовых.
let x = 1000;
const y = (x * 7) / 100;
console.log(`Через год у вас будет ${x + y} руб. на счету.`);
