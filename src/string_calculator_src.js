function Add (String){
  if (String === ''){
    return 0;
  }
  const delimiter = getDelimiter(String)
  const formattedInput = formatInput(String)
 
function formatInput(input){
  const delimiterRegExp = /^(\/\/.*\n)/
  const matches = delimiterRegExp.exec(input)
  if(matches && matches.length > 0){
    return input.replace(delimiterRegExp,'')
  }
  return input
}

function getDelimiter(input) {
  const delimiters = []
  const multipleDelimiterRegexp = /(?:^\/\/)?\[([^\[\]]+)\]\n?/g
  let matches = multipleDelimiterRegexp.exec(input)
  while(matches !== null){
    delimiters.push(matches[1])
    matches = multipleDelimiterRegexp.exec(input)
  }
  if(delimiters.length > 0){
    return new RegExp('['+delimiters.join('')+']')
  }
  matches = /^\/\/(.*)\n/.exec(input)
  if(matches && matches[1]){
    return matches[1]
  }
  return /[\n,]/ 
}

function getNumbers(string, delimiter){
  return string.split(delimiter)
    .filter(n => n !== '')
    .map(n => parseInt(n))
}

function calculateSum(numbers){
  const negatives = []
  const finalSum = numbers.reduce((sum, n) =>{
    if(n > 1000){
      return 0
    }
    if(n < 0){
      negatives.push(n)
      return 0
    }
    return sum + n
  },0)
  if(negatives.length > 0){
    throw new Error('Negatives not allowed: '+negatives.join(','))
  }
  return finalSum
}
return calculateSum(getNumbers(formattedInput, delimiter))   
}


module.exports = {Add};

// console.log(Add('1,1')) 
// console.log(Add('1,2,3')) 
// console.log(Add('1\n2,3')) 
// console.log(Add('//;\n1;2;3')) 
// console.log(Add('1001,2'))
// console.log(Add('//[**]\n1**2**3')) 
// console.log(Add('//[*][%]\n1*2%3')) 
// console.log(Add('//[..][%%]\n1..2%%3')) 


  

