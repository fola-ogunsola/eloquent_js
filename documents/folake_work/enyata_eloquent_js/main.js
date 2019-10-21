
for (var abc = "#"; abc.length < 8; abc+= "#") 
   console.log(abc);



var num = 100;
prompt("what is", "")
if( num / 3)
	console.log("Fizz");
else if (num / 5)
	console.log("Buzz");
else
	console.log("FizzBuzz");

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}


//chapter 2//

function min(x, y) {
	if (x < y) return x;
	else return y;
}
console.log( min(10, 20));