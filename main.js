"use strict";

let btnSubmit = document.querySelector(".registration .submit"),
  arrDivsOfInput = Array.from(document.querySelectorAll(".registration div")),
  arrOfErrorsText = [
    "Firest name cannot be empty",
    "Last name cannot be empty",
    "Looks like this is not an email",
    "Password cannot be empty",
  ];

btnSubmit.onclick = (e) => {
  e.preventDefault();

  let errortext = 0;
  arrDivsOfInput.forEach((ele) => {
    ele.firstElementChild.value.trim() == ""
      ? ShowError(ele, errortext)
      : HideError(ele);

    if (ele.classList.contains("email")) {
      if (ValidateEmail(ele.firstElementChild)) {
        ele.firstElementChild.classList.remove("red");
        HideError(ele, 2);
      } else {
        ele.firstElementChild.classList.add("red");
        ShowError(ele, 2);
      }
    }
    errortext++;
  });
};

function ShowError(ele, errortext) {
  ele.style.position = "relative";
  ele.style.marginBottom = "3rem";
  ele.classList.add("error");
  ele.setAttribute("data-error", arrOfErrorsText[errortext]);
  ele.firstElementChild.style.color = "red !important";
}

function HideError(ele) {
  ele.style.position = "static";
  ele.style.marginBottom = "1.5rem";
  ele.classList.remove("error");
}

function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    input.classList.add("red");
    return false;
  }
}
