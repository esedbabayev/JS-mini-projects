const billInput = document.getElementById("bill");
const formEl = document.getElementById("form");
const tip_5 = document.getElementById("tip-5");
const tip_10 = document.getElementById("tip-10");
const tip_15 = document.getElementById("tip-15");
const tip_25 = document.getElementById("tip-25");
const tip_50 = document.getElementById("tip-50");
const customTip = document.getElementById("custom-tip");
const numberOfPeople = document.getElementById("number-of-people");

const noZeroBill = document.getElementById("noZeroBill");
const noZero = document.getElementById("noZero");

const tipAmountPerPerson = document.getElementById("tip-amount-per-person");
const totalAmount = document.getElementById("total-amount");

const reset = document.getElementById("reset");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const bill = billInput.value;
  const cTip = customTip.value;
  const nPeople = numberOfPeople.value;

  if (!bill) {
    noZeroBill.textContent = "Please enter the amount of the bill"
    noZeroBill.style.color = "red"
  } else {
    noZeroBill.textContent = "";
  }

  if (!nPeople) {
    noZero.textContent = "Please specify the number of people"
    noZero.style.color = "red"
  } else {
    noZero.textContent = "";
  }



  let tip;
  let tipPerPerson;
  let totalBillPerPerson;

  if (tip_5.click) {
    tip = bill * 0.05;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
  if (tip_10.click) {
    tip = bill * 0.1;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
  if (tip_15.click) {
    tip = bill * 0.15;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
  if (tip_25.click) {
    tip = bill * 0.25;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
  if (tip_50.click) {
    tip = bill * 0.5;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
 if (customTip.click) {
    tip = (bill * cTip) / 100;
    tipPerPerson = tip / nPeople;
    totalBillPerPerson = bill / nPeople;
  
    tipAmountPerPerson.textContent = `$${Math.floor(tipPerPerson)}.${Math.floor(tip % nPeople)}`
    totalAmount.textContent = `$${Math.floor(totalBillPerPerson)}.${Math.floor(bill % nPeople)}`
    return
  }
});

reset.addEventListener("click", (e) => {
  e.preventDefault()
  tipAmountPerPerson.textContent = "$0.00"
  totalAmount.textContent = "$0.00"
  customTip.value = ""
  billInput.value = ""
  numberOfPeople.value = ""
});
