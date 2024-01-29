const convertBtn = document.getElementById('convert-btn');
const numInput = document.getElementById('number');
const output = document.getElementById('output');

const romanHash = [
  {value: 1000, numeral: 'M'},
  {value: 900, numeral: 'CM'},
  {value: 500, numeral: 'D'},
  {value: 400, numeral: 'CD'},
  {value: 100, numeral: 'C'},
  {value: 90, numeral: 'XC'},
  {value: 50, numeral: 'L'},
  {value: 40, numeral: 'XL'},
  {value: 10, numeral: 'X'},
  {value: 9, numeral: 'IX'},
  {value: 5, numeral: 'V'},
  {value: 4, numeral: 'IV'},
  {value: 1, numeral: 'I'}
];

const decimalToRoman = (num) => {
  //console.log("num = " + num);
  let romanNumeral = '';
  for (let i = 0; i < romanHash.length; i++){

    const target = romanHash[i].value;
    //console.log("target = " + target);
    const numeral = romanHash[i].numeral;
    console.log("numeral = " + numeral);
    while (num >= target){
      console.log(`${num} -= ${target} = ${num - target}`);
      num -= target;
      romanNumeral += numeral;
    }
  }
  return romanNumeral;
};

const checkInput = () => {
  if (!numInput.value){
    output.innerText = "Please enter a valid number";
  } 
  else if (numInput.value <= 0){
    output.innerText = "Please enter a number greater than or equal to 1";
  } 
  else if (numInput.value > 3999){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else {
    console.log('input valid');
    output.innerText = decimalToRoman(numInput.value);
  }
  numInput.value = '';
};



convertBtn.addEventListener("click", checkInput);