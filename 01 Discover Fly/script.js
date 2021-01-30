// Number Convert
function getInputNumber(id) {
  var number = parseInt(document.getElementById(id).value);
  return number;
};

// No of Ticket Calculation
function noOfTicket(ticketInput, isIncrease) {
  let ticketNumber = getInputNumber(ticketInput);
  if (isIncrease == true) {
    ticketNumber++;
  }
  if (isIncrease == false && ticketNumber > 0) {
    ticketNumber--;
  }
  document.getElementById(ticketInput).value = ticketNumber;
  totalCost();
};

// Total Cost Calculation
function totalCost() {
  let firstClassTicketNumber = getInputNumber("firstClassTicket");
  let economyClassTicketNumber = getInputNumber("economyTicket");
  let subtotal = (firstClassTicketNumber * 150) + (economyClassTicketNumber * 100);
  let vat = Math.round(subtotal * 0.1);
  let totalAmount = subtotal + vat;
  document.getElementById("subtotal").innerText = subtotal;
  document.getElementById("vat").innerText = vat;
  document.getElementById("total").innerText = totalAmount;
};

// Popup Function
function popup() {
  let firstClassTicketNumber = getInputNumber("firstClassTicket");
  let economyClassTicketNumber = getInputNumber("economyTicket");
  document.getElementById("first-class").innerText = firstClassTicketNumber;
  document.getElementById("economy-class").innerText = economyClassTicketNumber;
  document.getElementById("main-popup").classList.add("active");
};
// remove Popup 
function removePopup() {
  document.getElementById("main-popup").classList.remove("active");
};