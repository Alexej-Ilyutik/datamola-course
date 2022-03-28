const calendar = document.getElementById('calendar');
const elem = calendar.querySelector('.dates');
let year = 2022;
let month = 2;

function createCalendar(elem, year, month) {
  let arr = [];
  const firstDate = 1;
  let lastDate = getLastDayOfMonth(year, month);

  let shiftElemsNum = getShiftElemsNum(year, month);

  let pushElemsNum = getPushElemsNum(year, month);

  arr = createArr(firstDate, lastDate);

  // arr = shiftElems(shiftElemsNum, arr);
  console.log(arr);
  // arr = pushElems(shiftElemsNum, arr);
  // arr = chunkArr(7, arr);

  // createTable(pushElemsNum, elem);
}

function createTable(arr, el) {}

function createArr(from, to) {
  let arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
}

function shiftElems(num, el, arr) {
  for (let i = 0; i < num; i++) {
    arr.unshift();
  }
}

function pushElems(num, arr) {}

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

function chunkArr(num, array) {}

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

createCalendar(elem, year, month);
