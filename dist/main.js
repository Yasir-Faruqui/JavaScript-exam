"use strict";

let addBtn = document.querySelector(".add-btn"); //Add-btn
let addFriend = document.getElementById("add-friend"); //Add Modal button
let newFriend = document.getElementById("new-friend"); //Add friend input
let selectFriend = document.getElementById("friends");

// Adding new friends
addFriend.addEventListener("click", function () {
  let newOption = document.createElement("option");
  newOption.value = newFriend.value.toLowerCase();
  newOption.text = newFriend.value;
  selectFriend.add(newOption);
  newFriend.value = "";
});

//Resetting all inputs
function resetInputs() {
  let inputType = (document.getElementById("pay").value = "");
  let inputName = (document.getElementById("user-name").value = "");
  let inputCurrency = (document.getElementById("currency-options").value = "");
  let inputFriend = (document.getElementById("friends").value = "");
  let inputDate = (document.getElementById("date").value = "");
  let inputAmount = (document.getElementById("amount").value = "");
}

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputType = document.getElementById("pay").value;
  let inputName = document.getElementById("user-name").value;
  let inputCurrency = document.getElementById("currency-options").value;
  let inputFriend = document.getElementById("friends").value;
  let inputDate = document.getElementById("date").value;
  let inputAmount = document.getElementById("amount").value;

  // Error-messages

  // Payment input
  if (inputType == "") {
    document.querySelector(".err-pay").style.opacity = 1;
  } else {
    document.querySelector(".err-pay").style.opacity = 0;
  }
  //Name input
  if (inputName == "") {
    document.querySelector(".err-name").style.opacity = 1;
  } else {
    document.querySelector(".err-name").style.opacity = 0;
  }
  //Currency input
  if (inputCurrency == "") {
    document.querySelector(".err-currency").style.opacity = 1;
  } else {
    document.querySelector(".err-currency").style.opacity = 0;
  }
  //Friend input
  if (inputFriend == "") {
    document.querySelector(".err-friends").style.opacity = 1;
  } else {
    document.querySelector(".err-friends").style.opacity = 0;
  }
  //Date input
  if (inputDate == "") {
    document.querySelector(".err-date").style.opacity = 1;
  } else {
    document.querySelector(".err-date").style.opacity = 0;
  }
  //Amount input
  if (inputAmount == "") {
    document.querySelector(".err-amt").style.opacity = 1;
  } else {
    document.querySelector(".err-amt").style.opacity = 0;
  }
});

// Adding data to table
let index = 1;
addBtn.addEventListener("click", function (e) {
  e.preventDefault;
  let inputType = document.getElementById("pay").value;
  let inputName = document.getElementById("user-name").value;
  let inputFriend = document.getElementById("friends").value;
  let inputDate = document.getElementById("date").value;
  let inputAmount = document.getElementById("amount").value;

  let emp = [];

  let myArray = {
    type: inputType,
    userName: inputName,
    friend: inputFriend,
    date: inputDate,
    amount: inputAmount,
  };
  if (
    inputType == "" ||
    inputName == "" ||
    inputFriend == "" ||
    inputDate == "" ||
    inputAmount == ""
  ) {
    return;
  }

  emp.push(myArray);
  buildTable(myArray);

  function buildTable(data) {
    resetInputs();
    let table = document.getElementById("table-body");
    let row = "";

    for (var i = 0; i <= emp.length; i++) {
      row = `<tr id=${index}_index>
        <td id=${index}_type>${emp[i]["type"]}</td>
        <td id=${index}_userName>${emp[i]["userName"]}</td>
        <td id=${index}_friend>${emp[i]["friend"]}</td>
        <td id=${index}_date>${emp[i]["date"]}</td>
        <td id=${index}_amount>${emp[i]["amount"]}</td>
        <td id=${index}_icon><i class="fas fa-edit" onClick="edit(${index});"></i></td>
        </tr>`;

      table.innerHTML += row;
      index += 1;
    }
  }
});

// Edit button
//Click the button to edit the text inside table, click again when done editing.
function edit(index) {
  let x = document.getElementById(index + "_index");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
  } else {
    x.contentEditable = "true";
  }
}
