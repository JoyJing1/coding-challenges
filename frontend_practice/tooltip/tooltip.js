let header = document.getElementsByTagName("h1");

header[0].style.color = "red";

let lis = document.getElementsByTagName("li");

for(let i =  0; i < lis.length; i++) {
  lis[i].innerHTML = i;
}
