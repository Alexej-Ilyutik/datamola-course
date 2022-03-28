const calendar = document.getElementById('calendar');
const elem = calendar.querySelector('.dates');
const info = calendar.querySelector('.info');
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

function createCalendar(elem, year, month) {
  initialCalendar(elem, year, month - 1);
}

createCalendar(elem, 2012, 9);

function initialCalendar(elem, year, month) {
  let arr = [];
  const firstDate = 1;
  let lastDate = getLastDayOfMonth(year, month);

  let shiftElemsNum = getShiftElemsNum(year, month);

  let pushElemsNum = getPushElemsNum(year, month);

  arr = createArr(firstDate, lastDate);

  arr = shiftElems(shiftElemsNum, ' ', arr);

  arr = pushElems(pushElemsNum, ' ', arr);

  arr = chunkArr(7, arr);

  createTable(arr, elem);
  showInfo(year, month, info);
}

function createTable(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < arr[i].length; j++) {
      let td = document.createElement('td');
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    }
    el.appendChild(tr);
  }
}

function createArr(from, to) {
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
}

function shiftElems(num, el, arr) {
  for (let i = 0; i < num; i++) {
    arr.unshift(el);
  }
  return arr;
}

function pushElems(num, el, arr) {
  for (let i = 0; i < num; i++) {
    arr.push(el);
  }
  return arr;
}

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

function getShiftElemsNum(year, month) {
  let dayNum = getFirstWeekDayOfMonth(year, month);
  let realDay = getCurrentDay(dayNum);
  return realDay - 1;
}
function getPushElemsNum(year, month) {
  let dayNum = getLastWeekDayOfMonth(year, month);
  let realDay = getCurrentDay(dayNum);
  return 7 - realDay;
}

function chunkArr(num, array) {
  let res = [];
  while (array.length > 0) {
    let chunk = array.splice(0, num);
    res.push(chunk);
  }
  return res;
}

function getCurrentDay(num) {
  if (num === 0) {
    return 7;
  }
  return num;
}

function getFirstWeekDayOfMonth(year, month) {
  let date = new Date(year, month, 1);
  return date.getDay();
}

function getLastWeekDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDay();
}

function showInfo(year, month, el) {
  el.innerHTML = getMonthName(month) + ' ' + year;
}

function getMonthName(num) {
  const month = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  return month[num];
}

// initialCalendar(elem, year, month);
