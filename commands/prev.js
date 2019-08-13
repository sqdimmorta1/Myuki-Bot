const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args, ops) => {

  let rmsg1 = [
  'Ку!',
  'qq',
  'q',
  'Дороу',
  'Хэй!',
  'Йоу',
  'Приветики!',
  'Привет',
  'Хай',
  'Ку-ку',

]

const rmsg1c = rmsg1[Math.floor(Math.random() * rmsg1.length)]

  let botmessage1 = args.join('Привет', 'Ку', 'Хай', 'Hello', 'Hi', 'qq', 'q', 'кью', 'Дарова', 'Дороу', 'Здраствуйте');
message.channel.send(rmsg1c)
return;

let rmsg2 = [
'бай',
'bb',
'b',
'bye',
'goodbye',
'пока(',
'До встречи!',
'Досвидания',
'Пока',
'Поки-поки',

]

const rmsg2c = rmsg2[Math.floor(Math.random() * rmsg2.length)]

  let botmessage2 = args.join('Пока', 'Бай', 'Досвидания', 'Goodbye', 'gb', 'bb', 'b', 'bye', 'Поки', 'До встречи');
message.channel.send(rmsg2c)
return;

let rmsg3 = [
'Плохо (',
'Не очень',
'Так себе',
'Пойдет',
'Нормально',
'Плюс-минус норм',
'Скажем так, хорошо',
'Хорошо',
'Круто!',
'Отлично!',

]

const rmsg3c = rmsg3[Math.floor(Math.random() * rmsg3.length)]

  let botmessage3 = args.join('Как дела', 'поживается', 'жизнь', 'настроение');
message.channel.send(rmsg3c)
return;

let rmsg4 = [
'Ок',
'Ага',
'Угу',

]

const rmsg4c = rmsg4[Math.floor(Math.random() * rmsg4.length)]

  let botmessage4 = args.join('Хорошо');
message.channel.send(rmsg4c)
return;

let rmsg5 = [
'Ну вроде бот',
'Бот',
'Робот из будущего!',
'Дискорд бот',
'Я робот буп-бип!',

]

const rmsg5c = rmsg5[Math.floor(Math.random() * rmsg5.length)]

  let botmessage5 = args.join('ты кто?', 'Ты кто?', 'Кто ты?', 'кто ты?', 'ты кто', 'кто ты', 'Ты кто', 'Кто ты');
message.channel.send(rmsg5c)
return;

let rmsg6 = [
'Ок',
'Ну ок',
'А че так?',
'Ясно',
'Понятно',

]

const rmsg6c = rmsg6[Math.floor(Math.random() * rmsg6.length)]

  let botmessage6 = args.join('Плохо');
message.channel.send(rmsg6c)
return;

let rmsg7 = [
'Эй!',
'Бан!',
'ээээ..',
'Всмысле?',
'Каво',
'Чиво',
'Фуу!!',

]

const rmsg7c = rmsg7[Math.floor(Math.random() * rmsg7.length)]

  let botmessage7 = args.join('секс');
message.channel.send(rmsg7c)
return;

let rmsg8 = [
'Ууу.. конфеты',
'конфеты!!!!',
'Ты сказал что-то про конфеты???',

]

const rmsg8c = rmsg8[Math.floor(Math.random() * rmsg8.length)]

  let botmessage8 = args.join('Конфет');
message.channel.send(rmsg8c)
return;

let rmsg9 = [
'эээ..',
'Всмысле',
'А?',
'Какое еще говно?',

]

const rmsg9c = rmsg9[Math.floor(Math.random() * rmsg9.length)]

  let botmessage9 = args.join('Говно', 'Дерьмо');
message.channel.send(rmsg9c)
return;

let rmsg10 = [
'УУу',
'ууу.. ясно',
'Бабки значит?',
'Мда',

]

const rmsg10c = rmsg10[Math.floor(Math.random() * rmsg10.length)]

  let botmessage10 = args.join('деньги', 'бабки', 'бабло');
message.channel.send(rmsg10c)
return;

let rmsg11 = [
'GO!',
'Пойдем',
'Го-го-го',
'Го',

]

const rmsg11c = rmsg11[Math.floor(Math.random() * rmsg11.length)]

  let botmessage11 = args.join('Пошли', 'гоу', 'го', 'пойдем', 'как насчет', 'как насчёт');
message.channel.send(rmsg11c)
return;

let rmsg12 = [
'маенкрааафт!',
'minecraft',
'Майнкрафт - это моя жизнь!',
'Minecraft? Ух ё',

]

const rmsg12c = rmsg12[Math.floor(Math.random() * rmsg12.length)]

  let botmessage12 = args.join('майнкрафт', 'майн', 'майнсруфт', 'минесруфт', 'минекрафт', 'маенкрафт', 'маен', 'minecraft');
message.channel.send(rmsg12c)
return;

let rmsg13 = [
'Я проголодался..',
'Хочу кушать..',
'Мне показалось, или ты что-то про еду сказал?!',
'Эхх.. щас бы шавермы навернуть!',

]

const rmsg13c = rmsg13[Math.floor(Math.random() * rmsg13.length)]

  let botmessage13 = args.join('пицц', 'суши', 'бургер', 'шаурм', 'шаверм');
message.channel.send(rmsg13c)
return;

let rmsg14 = [
'Ты что-то про Лириза сказал?',
'Liryz?',
'Лириз?',
'Кто такой Лириз?)',

]

const rmsg14c = rmsg14[Math.floor(Math.random() * rmsg14.length)]

  let botmessage14 = args.join('Лириз', 'Лируз', 'Люриз', 'Liruz', 'Liriz', 'Liryz');
message.channel.send(rmsg14c)
return;
}
