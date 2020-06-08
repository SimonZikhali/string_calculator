// Helper functions
function validateInput(string){
  const asciiCode = string[string.length-1].charCodeAt(0)
  if((string.search(/[//]/) != 0 && string.search(/[//]/) != -1) 
  || asciiCode < 48 || asciiCode > 57){
      throw 'ERROR: invalid input';
  } 

}

function calculateSum(numbers){
  //sum all numbers below 1000
  let total = 0;
  for(let pos = 0; pos < numbers.length; pos++){
    let n = Number(numbers[pos]);
    if(n < 1000){
      total = total + n;
    }
  }
  return total;
}

function checkNegatives(str){
  let neg = /-\d+/g;
  if(str.match(neg)){
    throw "ERROR: negatives not allowed " + str.match(neg);
  }
}
//end of helper functions

function add (string){
  if (string === ''){
    return 0;
  }
  validateInput(string);
  checkNegatives(string);

  let pattern = /-?\d+/g; //pattern for extracting all numbers
  let numbers = string.match(pattern);
  if (numbers.length == 1 && Number(numbers[0]) > 0){
    return Number(numbers[0]);
  }
  if(string.search(/[//]/) == -1){
    return calculateSum(numbers);
  }

  let delim  = string.slice(0, string.search((/[\n]/))); //Get delimiter from string
  let delNum = delim.match(pattern);
  if(delNum == null){
    return calculateSum(numbers);
  }
  delNum = delNum[0];
  let nums = [];
  for(let pos = 0; pos < numbers.length; pos++){
    if(numbers[pos] != delNum){
      let numberSplit = numbers[pos].split(delNum);
      for(let i = 0; i < numberSplit.length; i++){
        nums.push(numberSplit[i]);
      }
    }
  }
  return calculateSum(nums);
}



module.exports = {add};

// console.log(add('1,1')) 
// console.log(add('1,2,3')) 
// console.log(add('1\n2,3')) 
// console.log(add('//;\n1;2;3')) 
// console.log(add('1001,2'))
// console.log(add('//[**]\n1**2**3')) 
// console.log(add('//[*][%]\n1*2%3')) 
// console.log(add('//[..][%%]\n1..2%%3')) 
// console.log(add("//;\n1000;1;2;"))
// console.log(add("-1,-2,3,4"));

  

