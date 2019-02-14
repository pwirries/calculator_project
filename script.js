let input = [];
let inputNum = '';
const operations = ["+", "-", "/", "*"]
const display = document.querySelector('.displayArea');
display.innerText = ''
createNumKeys();


function createNumKeys() {
  const numberPad = document.querySelector('.numberContainer');

  let num = 9;
  for (let i=0; i<4; i++) {
    for (let j=0; j<3; j++) {
    
      if (i < 3) {
        numKey = num - 2 + j - (3*i);
        let number = document.createElement('button');
        number.classList.add('btn');
        number.classList.add('numbers');
        number.textContent = numKey;
        number.classList.add('number' + numKey);

        numberPad.appendChild(number);

      }
      else {
        const dot = document.createElement('button');
        dot.classList.add('btn');
        dot.classList.add('numbers');
        dot.textContent = '.';

        const zero = document.createElement('button');
        zero.classList.add('btn');
        zero.classList.add('numbers');
        zero.textContent = '0'

        const sign = document.createElement('button');
        sign.classList.add('btn');
        sign.classList.add('numbers');
        sign.textContent = '+/-';

        numberPad.appendChild(dot);
        numberPad.appendChild(zero);
        numberPad.appendChild(sign);
        break;
      }

    }
  }

const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{ button.addEventListener('click', (e) => {
    if (e.target.innerText == "C") {
      clearInput();
    }
    else if (e.target.innerText == "=") {
        input.push(inputNum);
        inputNum = '';
        operate();
    }
    else if (operations.includes(e.target.innerText)) {
        if (num == '') {
            alert("You must enter a number before an operation");
        }
        else {
            input.push(inputNum);
            input.push(e.target.innerText);
            inputNum = '';
            updateDisplay();
        }
    }
    else {
        inputNum = inputNum + e.target.innerText;
        updateDisplay();
    }
  })});

}

function updateDisplay() {
  display.innerText = input.toString().replace(new RegExp(",", 'g'), "") + inputNum;
}

function clearInput() {
  input = [];
  inputNum = '';
  updateDisplay();
}


function operate() {
    //while (input.length > 0) {
        check1 = input.indexOf("*");
        check2 = input.indexOf("/");
        console.log(check1);
        console.log(check2);

        if (check1 < check2 || (check1 > 0 && check2 < 0)) {
            console.log(input[check1 - 1]);
            console.log(input[check1 + 1]);
            newVal = input[check1 - 1] * input[check1 + 1];
            input.splice(check1-1, 3, newVal);
            updateDisplay()
        }
    //}
}
//add elements to string until operation button is pressed
//add string to array
//search for operation and grab number before and after (indexOf('+'))
//this will allow us to search for multi/division first, then add/sub
//pass values to operation function, return  new values
//replace 3 previous items with new value ([1,+,2] => [3])