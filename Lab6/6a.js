function convert() {
  let temp = document.getElementById('field1').value;
  let select = document.getElementById('tempSelect');
  let optionIndx = select.options[select.selectedIndex].value;

  if (optionIndx === 1) {
    document.getElementById('field2').value = (temp - 32) / 1.8;
  } else {
    document.getElementById('field2').value = temp * 1.8 + 32;
  }
  document.getElementById('field1').value = "";
}
