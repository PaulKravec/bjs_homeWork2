// Задача №1
"use strict"

function solveEquation(a, b, c) { 
  let arr = [];
  let d = Math.pow(b, 2)-(4*a*c);
  if (d < 0) {
    } else if (d == 0){
    arr[0] = (-b/(2*a));
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d) )/(2*a);
    arr[1] = (-b - Math.sqrt(d) )/(2*a); 
  }
  
  return arr; 
}
// Задача №2

/*
let percent = Number(prompt("Введите процентную ставку в %"));//процентная ставка
let contribution = Number(prompt("Введите сумму первого взноса в руб."));//сумма перв. взноса
let amount = Number(prompt("Введите общую стоимость ипотечного кредита в руб."));// общая стоимость
let countMonths = Number(prompt("Введите срок ипотеки (кол-во месяцев)"));
calculateTotalMortgage(percent, contribution, amount, countMonths) //вызов функции
*/
"use strict"
  function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
    if (isNaN(percent) || isNaN (contribution) || isNaN (amount)) {
      return false;
    }
    let per = percent / 100 / 12; 
    let s = amount - contribution; 
    let pay = s * (per + (per / (Math.pow(1 + per, countMonths) - 1)));
    let totalAmount = +(pay * countMonths).toFixed(2);
    return totalAmount;
  }
  
