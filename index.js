//1.Id selector 
const h = window.document.getElementsByTagName("h1");
console.log(h[0]);

//2.id selector
const i = document.getElementById("a");
console.log(i);

//3.Class Selector
const c = document.getElementsByClassName("b");
console.log(c);

//4.queryselector
const d = document.querySelector(".b");
console.log(d);

//.queryselectorAll
const e = document.querySelectorAll("h1");
console.log(e[0]);

//read/write
console.log(d.textContent);

i.textContent="Dom Manipulation"

//styling

i.style.color="blue";
i.classList.add("qw");
i.classList.toggle("as1");

const aa = document.createElement("h2");
aa.textContent = "Added from JS";