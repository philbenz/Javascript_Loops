for(var i=0; i<1001; i+=100)
 {
   console.log(i);
 }

for(var i=0; i<9; i++) {
  console.log(Math.pow(2, i));
 }

for(var i=0; i<6; i++)
{
  console.log(i*2);
}

for(var i=1; i<6; i++)
{
   console.log(i*3);
}

for(var i=9; i>-1; i--)
{
  console.log(i);
}

for(var i=1; i<5; i++){
   for(var j=1; j<4; j++) {
     console.log(i);
   }
 }

for(var i=0; i<3; i++){
  for(var j=0; j<5; j++) {
     console.log(j);
   }
}

for(i=1; i<26; i++){
  if(i%2 === 0) {
    console.log(i +" is even")
  }else {
    console.log(i +" is negative")
  }
}

for(i=1; i<51; i++){
  if((i%3 === 0)&&(i%5!==0)) {
   console.log("Fizz")
 }else if((i%3 !== 0)&&(i%5 === 0)){
  console.log("Buzz")
   }else if((i%3===0)&&(i%5===0)) {
   console.log("FizzBuzz")
 }else{
   console.log(i);
  }
 }

var sum = 0;
for(i=1; i<1000; i++){
  if((i%3 === 0)||(i%5===0)) {
    sum = sum + i;
  }
}

console.log("The total is: " + sum);

var starry = "";
for(i=1; i<8; i++){
    console.log(starry = starry + "*");
}
