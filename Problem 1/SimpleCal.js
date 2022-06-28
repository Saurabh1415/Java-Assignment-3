let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValve = '';
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('button text is', buttonText);
    if (buttonText == 'X') {
      buttonText = '*';
      screenValve += buttonText;
      screen.value = screenValve;
    }
    else if (buttonText == 'AC') {
      screenValue = "";
      screen.value = screenValue;
    }
    else if (buttonText == '=') {
      screen.value = eval(screenValue);
    }
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  })
}