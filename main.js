document.writeln("Hello world");

let x = document.getElementById("panel");
x.innerHTML = "hello.js";

function sum(ar) {
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

let ar = [2, 3, 4];
x.innerHTML = "Tong la: " + sum(ar);

let buttons = document.getElementsByTagName("button");
let ran = Math.random;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].innerText = "Button " + i;
  let R = Math.random() * 255;
  let G = Math.random() * 255;
  let B = Math.random() * 255;
  buttons[i].style.backgroundColor = "rgb(" + R + G + B + ")";
}

let txt = document.getElementById("num");
let btn = document.getElementById("btn");

let subnp = document.getElementById("subnewpanel");

btn.addEventListener(
  "click",
  function () {
    let number = parseInt(txt.value);
    for (let i = 0; i < number; i++) {
      let bt = document.createElement("button");
      bt.innerText = "Button" + i;
      subnp.append(bt);
    }
  },
  false
);
