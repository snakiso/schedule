// прокрутка с помощью мыши
(function () {
 let speed = 2; // Скорость скролла.

 let scroll = document.querySelector('.program__schedule');

 let left = 0; // отпустили мышку - сохраняем положение скролла
 let drag = false;
 let coorX = 0; // нажали мышку - сохраняем координаты.

 scroll.addEventListener('mousedown', function (e) {
  drag = true;
  coorX = e.pageX + this.offsetLeft;
 });
 document.addEventListener('mouseup', function () {
  drag = false;
  left = scroll.scrollLeft;
 });
 scroll.addEventListener('mousemove', function (e) {
  if (drag) {
   this.scrollLeft = left - (e.pageX + this.offsetLeft - coorX) * speed;
  }
 });
})();

// очистка экрана при расширении 
const mobileSchedule = document.querySelector('.mobile-schedule__wrapper')
window.addEventListener("resize", function () {
 if (window.matchMedia("(min-width: 1000px)").matches) {
  mobileSchedule.innerHTML = ''
 } 
});


//кнопка выбора зала
const choiceButton = document.querySelector('.choice__hall-button')
const arrowDown = document.querySelector('.arrow-down')
const arrowUp = document.querySelector('.arrow-up')
const hallList = document.querySelector('.hall__list')
choiceButton.addEventListener('click', () => {
 if (arrowDown.classList == 'arrow-down'){
 arrowDown.classList.remove('arrow-down')
 arrowDown.classList.add('arrow-up')
 hallList.classList.add('hall__list-active')
 }else{
  arrowDown.classList.remove('arrow-up')
  arrowDown.classList.add('arrow-down')
  hallList.classList.remove('hall__list-active')
 }
})


//создание элементов расписания
const list = document.querySelector('.hall__list');
const wrapper = document.querySelector('.mobile-schedule__wrapper')
const hall1 = document.getElementById('hall1');
const hall2 = document.getElementById('hall2');
const hall3 = document.getElementById('hall3');
const hall4 = document.getElementById('hall4');
const hall5 = document.getElementById('hall5');
const hall6 = document.getElementById('hall6');
const hall7 = document.getElementById('hall7');
const hall8 = document.getElementById('hall8');
const hall9 = document.getElementById('hall9');
const hall10 = document.getElementById('hall10');
const choice = document.querySelector('.choice__hall-value')

//конференц зал 1
hall1.addEventListener('click', () =>{
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall1.innerHTML
 wrapper.innerHTML = ''
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 //полоска времени
 const timeArr = ['15:00', '15:30', '16:30', '17:00', '17:30']
 for(i=0; i<timeArr.length; i++){
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 //
 wrapper.append(schedule)
 let jd = document.createElement('div')
 jd.className = 'mobile__jd-transport'
 wrapper.append(jd)
 let h3 = document.createElement('h3')
 h3.innerHTML = 'Железнодорожный транспорт'
 jd.append(h3)
 const pArr = ['Круглый стол', 'ЗСД, ФАЖТ, СГУПС', 'Развитие железнодорожного транспорта в современных условиях']
 for(i=0; i<pArr.length; i++){
  let p = document.createElement('p')
  p.innerHTML = pArr[i]
  jd.append(p)
 }
})
//
//
//конференц зал 2
hall2.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall2.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
//можно копировать
let wrapperBlocks = document.createElement('div')
wrapperBlocks.className = 'mobile__wrap'
wrapper.append(wrapperBlocks)
//можно копировать 
 let airplane = document.createElement('h3')
 airplane.innerHTML='Воздушный транспорт'
 let airplane2 = document.createElement('h3')
 airplane2.innerHTML = 'Воздушный транспорт'
//
 let forum = document.createElement('h3')
 forum.innerHTML = 'Открытие форума '
//
 let airline1 = document.createElement('div')
 airline1.className = 'mobile__air-transport-1'
 airline1.append(airplane)
 wrapperBlocks.append(airline1)
 const pArr = ['Конференция', 'Толмачево','Место Сибири и СФО в авиационных перевозках РФ']
 for (i = 0; i < pArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArr[i]
  airline1.append(p)
 }
//
 let coffeBreak = document.createElement('div')
 coffeBreak.className = 'mobile__coffeeBreak'
 coffeBreak.innerHTML = 'Кофе-брейк'
 wrapperBlocks.append(coffeBreak)
// 
 let openForum = document.createElement('div')
 openForum.append(forum)
 const forumArr = ['Пленарная дискуссия','2022 год. Новые возможности для транспортной отрасли и экономики России.']
 for (i = 0; i < forumArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = forumArr[i]
  openForum.append(p)}
 openForum.className = 'mobile__open-forum'
 wrapperBlocks.append(openForum)
//
 let dinner = document.createElement('div')
 dinner.className = 'mobile__dinner'
 dinner.innerHTML = 'Обеденный перерыв'
 wrapperBlocks.append(dinner)

//
let airline2 = document.createElement('div')
airline2.className = 'mobile__air-transport-2'
airline2.append(airplane2)
wrapperBlocks.append(airline2)
 const pArray = ['Конференция', 'Толмачево', 'Реализация проектов создания и техподдержки отечественных воздушных судов в условиях новой реальности']
for (i = 0; i < pArray.length; i++) {
 let p = document.createElement('p')
 p.innerHTML = pArray[i]
 airline2.append(p)}
})
//
//
//конференц зал 3
hall3.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall2.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 //можно копировать
 let wrapperBlocks = document.createElement('div')
 wrapperBlocks.className = 'mobile__wrap'
 wrapper.append(wrapperBlocks)
 //можно копировать 
 let airplane = document.createElement('h3')
 airplane.innerHTML = 'Воздушный транспорт'
 let airplane2 = document.createElement('h3')
 airplane2.innerHTML = 'Воздушный транспорт'
 //
 let forum = document.createElement('h3')
 forum.innerHTML = 'Открытие форума '
 //
 let airline1 = document.createElement('div')
 airline1.className = 'mobile__air-transport-1'
 airline1.append(airplane)
 wrapperBlocks.append(airline1)
 const pArr = ['Конференция', 'Толмачево', 'Место Сибири и СФО в авиационных перевозках РФ']
 for (i = 0; i < pArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArr[i]
  airline1.append(p)
 }
 //
 let coffeBreak = document.createElement('div')
 coffeBreak.className = 'mobile__coffeeBreak'
 coffeBreak.innerHTML = 'Кофе-брейк'
 wrapperBlocks.append(coffeBreak)
 // 
 let openForum = document.createElement('div')
 openForum.append(forum)
 const forumArr = ['Пленарная дискуссия', '2022 год. Новые возможности для транспортной отрасли и экономики России.']
 for (i = 0; i < forumArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = forumArr[i]
  openForum.append(p)
 }
 openForum.className = 'mobile__open-forum'
 wrapperBlocks.append(openForum)
 //
 let dinner = document.createElement('div')
 dinner.className = 'mobile__dinner'
 dinner.innerHTML = 'Обеденный перерыв'
 wrapperBlocks.append(dinner)

 //
 let airline2 = document.createElement('div')
 airline2.className = 'mobile__air-transport-2'
 airline2.append(airplane2)
 wrapperBlocks.append(airline2)
 const pArray = ['Конференция', 'Толмачево', 'Реализация проектов создания и техподдержки отечественных воздушных судов в условиях новой реальности']
 for (i = 0; i < pArray.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArray[i]
  airline2.append(p)
 }
})
//
//
//конференц зал 4
hall4.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall4.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 } 
 let complexName = document.createElement('h3')
 complexName.innerHTML = 'Дорожно-строительный комплекс'
 let complex = document.createElement('div')
 complex.className = 'mobile__road-complex'
 complex.append(complexName)
 wrapper.append(complex)
 const pArray = ['Конференция', 'Информавтодор', 'Как бы то ни было, близость к государственным границам бодрит']
 for (i = 0; i < pArray.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArray[i]
  complex.append(p)
 }
})
//
//
//конференц зал 5
hall5.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall5.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['10:00', '10:30', '11:00', '11:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 let wrapperBlocks = document.createElement('div')
 wrapperBlocks.className = 'mobile__wrap'
 wrapper.append(wrapperBlocks)
 let logisticComplexName = document.createElement('h3')
 logisticComplexName.innerHTML = 'Транспортно-логистический комплекс'
 let logisticComplex = document.createElement('div')
 logisticComplex.className = 'mobile__logistic-complex'
 logisticComplex.append(logisticComplexName)
 wrapperBlocks.append(logisticComplex)
 const pArray = ['Конференция', 'ЦСР', 'Транспортно-логистические коридоры: современные реалии и перспективы']
 for (i = 0; i < pArray.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArray[i]
  logisticComplex.append(p)
 }
 let logisticComplex1Name = document.createElement('h3')
 logisticComplex1Name.innerHTML = 'Транспортно-логистический комплекс'
 let logisticComplex1 = document.createElement('div')
 logisticComplex1.className = 'mobile__logistic-complex1'
 logisticComplex1.append(logisticComplex1Name)
 wrapperBlocks.append(logisticComplex1)
 const pArr = ['Конференция', 'Союз транспортников, экспедиторов и логистов Сибири', 'Трансформация логистики грузовых перевозок в современных условиях: проблемы, специфика, перспективы']
 for (i = 0; i < pArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArr[i]
  logisticComplex1.append(p)
 }
})
//
//
//конференц зал 6
hall6.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall6.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['10:00', '10:30', '11:00', '11:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 let wrapperBlocks = document.createElement('div')
 wrapperBlocks.className = 'mobile__wrap'
 wrapper.append(wrapperBlocks)
 let complexName = document.createElement('h3')
 complexName.innerHTML = 'Дорожно-строительный комплекс'
 let complex = document.createElement('div')
 complex.className = 'mobile__road-complex1'
 complex.append(complexName)
 wrapperBlocks.append(complex)
 const pArray = ['Конференция', 'ТУАД', 'Технологии информационного моделирования. Проблемы внедрения.']
 for (i = 0; i < pArray.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArray[i]
  complex.append(p)
 }
 let safetyName = document.createElement('h3')
 safetyName.innerHTML = 'Безопасность дорожного движения'
 let safety = document.createElement('div')
 safety.className =  'mobile__safety-traffic'
 safety.append(safetyName)
 const pArr = ['Семинар', 'Постоянный количественный рост не стал ограничивающим фактором']
 for (i = 0; i < pArr.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArr[i]
  safety.append(p)
 }
 wrapperBlocks.append(safety)
})
//
//
// конференц зал 7
hall7.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall7.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['15:00', '15:30', '16:00', '16:30', '17:00', '17:30']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 let complexName = document.createElement('h3')
 complexName.innerHTML = 'Дорожно-строительный комплекс'
 let complex = document.createElement('div')
 complex.className = 'mobile__road-complex2'
 complex.append(complexName)
 wrapper.append(complex)
 const pArray = ['Конференция', 'Ассоциация «Цифровая Эра Транспорта»', 'Цифровая трансформация транспорта в регионах: эффективность, безопасность, перспективы']
 for (i = 0; i < pArray.length; i++) {
  let p = document.createElement('p')
  p.innerHTML = pArray[i]
  complex.append(p)
 }
})
//
//
//переговорная комната 
hall8.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall8.innerHTML
 let plan = document.createElement('div')
 plan.className = 'nop-planned'
 plan.innerHTML = 'В этот день ничего не запланировано'
 wrapper.append(plan)
})
// 
// 
// Территория выставки
hall9.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall9.innerHTML
 let schedule = document.createElement('div')
 schedule.className = 'mobile__schedule'
 wrapper.append(schedule)
 const timeArr = ['9:00', '9:30', '10:00']
 for (i = 0; i < timeArr.length; i++) {
  let time = document.createElement('div')
  time.className = 'mobile__schedule-time'
  time.innerHTML = timeArr[i]
  schedule.append(time)
 }
 let exhibitionName = document.createElement('h3')
 exhibitionName.innerHTML = 'Обход выставки'
 let exhibition = document.createElement('div')
 exhibition.className = 'mobile__exhibition'
 exhibition.append(exhibitionName)
 wrapper.append(exhibition)
})
// 
// 
// Уличная площадка Экспоцентра
hall10.addEventListener('click', () => {
 wrapper.innerHTML = ''
 hallList.classList.remove('hall__list-active')
 arrowDown.classList.add('arrow-down')
 arrowDown.classList.remove('arrow-up')
 choice.innerHTML = hall10.innerHTML
 let plan = document.createElement('div')
 plan.className = 'nop-planned'
 plan.innerHTML = 'В этот день ничего не запланировано'
 wrapper.append(plan)
})