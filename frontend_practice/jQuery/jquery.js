let $ul = $("ul");
let $li = $("<li>").text("list item")
            .css("font-size", "36px")
            .css("border", "2px solid black");

$ul.append($li);


let lis = document.getElementsByTagName("li");

for (let li of lis) {
  console.log(li);
  li.innerHTML = "new text from let li of lis";
}
