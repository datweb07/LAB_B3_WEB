// document.writeln("Hello world");

// let x = document.getElementById("panel");
// x.innerHTML = "hello.js";

// function sum(ar) {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// }

// let ar = [2, 3, 4];
// x.innerHTML = "Tong la: " + sum(ar);

// let buttons = document.getElementsByTagName("button");
// let ran = Math.random;
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].innerText = "Button " + i;
//   let R = Math.random() * 255;
//   let G = Math.random() * 255;
//   let B = Math.random() * 255;
//   buttons[i].style.backgroundColor = "rgb(" + R + G + B + ")";
// }

// let txt = document.getElementById("num");
// let btn = document.getElementById("btn");

// let subnp = document.getElementById("subnewpanel");

// btn.addEventListener(
//   "click",
//   function () {
//     let number = parseInt(txt.value);
//     for (let i = 0; i < number; i++) {
//       let bt = document.createElement("button");
//       bt.innerText = "Button" + i;
//       subnp.append(bt);
//     }
//   },
//   false
// );

// let arr = new Array();
// arr.push(1);
// arr.push(2);

// let sum2 = arr[0];
//arr.pop();

/* 
1. sử dụng js tạo bảng sau
STT     Họ và Tên       Điểm TB     Chuyên ngành        Xóa
1       .........       .......     ............        ...

Thêm mới  <--- Button (hoặc Input button)

2. Khi bấm Thêm mới, bảng sẽ bổ sung một dòng mới để nhập dữ liệu (dòng như mô tả trên)
3. Bảng biểu sẽ được style bằng CSS hoặc Js + css theo quy tắc 
Header: Màu xám, chữ bold, màu chữ trắng
Dòng chẵn: màu vàng, chữ italic, màu chữ blue
Dòng lẻ: màu green, chữ italic, màu chữ red
*/

let table, tbody;

document.addEventListener("DOMContentLoaded", () => {
  createTable();
  addRow(); // tạo sẵn 1 dòng ban đầu

  document.getElementById("addBtn").addEventListener("click", addRow);
});

function createTable() {
  const container = document.getElementById("tableContainer");

  table = document.createElement("table");

  // thead
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["STT", "Họ và tên", "Điểm TB", "Chuyên ngành", "Xóa"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // tbody
  tbody = document.createElement("tbody");
  table.appendChild(tbody);

  container.appendChild(table);
}

function addRow() {
  const rowCount = tbody.rows.length;
  const newSTT = rowCount + 1;

  const tr = document.createElement("tr");

  // STT
  const tdSTT = document.createElement("td");
  tdSTT.textContent = newSTT;
  tr.appendChild(tdSTT);

  // Họ và tên
  const tdName = document.createElement("td");
  const inputName = document.createElement("input");
  inputName.type = "text";
  tdName.appendChild(inputName);
  tr.appendChild(tdName);

  // Điểm TB
  const tdScore = document.createElement("td");
  const inputScore = document.createElement("input");
  inputScore.type = "number";
  inputScore.step = "0.1";
  tdScore.appendChild(inputScore);
  tr.appendChild(tdScore);

  // Chuyên ngành
  const tdMajor = document.createElement("td");
  const inputMajor = document.createElement("input");
  inputMajor.type = "text";
  tdMajor.appendChild(inputMajor);
  tr.appendChild(tdMajor);

  // Xóa
  const tdDelete = document.createElement("td");
  const btnDelete = document.createElement("button");
  btnDelete.textContent = "X";
  btnDelete.onclick = () => deleteRow(btnDelete);
  tdDelete.appendChild(btnDelete);
  tr.appendChild(tdDelete);

  tbody.appendChild(tr);
}

function deleteRow(btn) {
  const tr = btn.closest("tr");
  tr.remove();

  // Cập nhật lại STT
  [...tbody.rows].forEach((row, index) => {
    row.cells[0].textContent = index + 1;
  });
}

data.forEach((item) => {
  const row = document.createElement("tr");
  // Tạo các ô cho mỗi dữ liệu
  Object.values(item).forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.appendChild(cell);
  });
  tbody.appendChild(row);
});
table.appendChild(tbody);

// 6. Gắn bảng vào container
tableContainer.appendChild(table);
