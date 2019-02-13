let input = [];
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
    else {
    input.push(e.target.innerText);
    updateDisplay();
    }
  })});

}

function updateDisplay() {
  const display = document.querySelector('.displayArea');
  display.innerText = input.toString().replace(new RegExp(",", 'g'), "");
}

function clearInput() {
  input = [];
  updateDisplay();
}

//add elements to string until operation button is pressed
//add string to array
//search for operation and grab number before and after (indexOf('+'))
//this will allow us to search for multi/division first, then add/sub
//pass values to operation function, return  new values
//replace 3 previous items with new value ([1,+,2] => [3])