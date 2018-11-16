function add() {
  let table = document.getElementById('myTable');
  // let row = table.insertRow(0);
  // let cell1 = row.insertCell(0);
  // let cell2 = row.insertCell(1);
  // cell1.textContent = document.getElementById('email').value;
  // cell2.textContent = document.getElementById('password').value;
  // document.getElementById('email').value = "";
  // document.getElementById('password').value = "";
  let row = document.createElement("tr");
  let cell1 = document.createElement("td")
  let email = document.createTextNode(document.getElementById('email').value);
  let cell2 = document.createElement("td");
  let pass = document.createTextNode(document.getElementById('password').value);
  cell1.appendChild(email);
  cell2.appendChild(pass);
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
  document.getElementById('email').value = "";
  document.getElementById('password').value = "";
}
