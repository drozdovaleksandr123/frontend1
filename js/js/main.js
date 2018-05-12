
var string = prompt("Input the word");
var str = prompt("Input the string with spaces");
console.log("String: ", string);
console.log("Str: ", str);
function lastSymbol(line) {
  return string.slice(-1);
}

var last = lastSymbol('frontend');
console.log('The last symbol in string is:', last);


function WithoutLast(line) {
  return string.slice(0, string.length-1);
}

console.log('String without last symbol: ', WithoutLast(string));

function StringReverse(line) {
  return string.split("").reverse().join("");
}

console.log('Reverse of string: ', StringReverse(string));

function DeleteSpace(line) {  
  var str = line.replace(/\s+/g, " ");
  return str; 
} 

console.log('String with deleted spaces: ', DeleteSpace(str)); 




