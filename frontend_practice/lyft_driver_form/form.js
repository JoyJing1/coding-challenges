function formValidation() {
  event.preventDefault();
  // debugger;
  // console.log("tried to submit");

  let inputs = document.getElementsByTagName("input");

  console.log(inputs);

  for (let i = 0; i < 5; i++) {
    if (inputs[i].value === "") {
      inputs[i].className = "red";
    } else {
      inputs[i].className = "";
    }
  }

  if (!inputs[6].checked === true) {
    let termsText = document.createTextNode("You must agree to the terms.");
    inputs[5].appendChild(termsText);
  }
  debugger;

}

// promo code not required
