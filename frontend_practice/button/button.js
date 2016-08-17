
// aTag[0].innerHTML = "Click on me!";

function createDiv() {
	// e.preventDefault();
  let divs = document.getElementsByTagName("div");

  let newDiv = document.createElement("div");
  let text = document.createTextNode("My new div");

  newDiv.appendChild(text);
	divs[0].appendChild(newDiv);

  console.log(newDiv);

}
