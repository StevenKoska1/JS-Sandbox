const listItems = document.getElementsByTagName("li");
console.log(listItems)
console.log(listItems.length);
console.log(listItems[0]);

//Collection to array
Array.from(listItems).forEach(listItems => {
    listItems.style.color= "red";
});

const btn = document.getElementsByClassName("btn");
console.log(btn);
btn[0].style.backgroundColor= "yellow";

//select elements by ID
const title = document.getElementById("title");
console.log(title);
title.textContent = "Hello World!";
link.style.color = "red";

//select element with queryselector

const list1= document.querySelector("#list1");
console.log(list1);

const link = document.querySelector("li.item a");
console.log(link);
link.style.textDecoration = "none";
link.style.color = "green";

const h1 = document.querySelector("h1.title");
link.style.color = "red";