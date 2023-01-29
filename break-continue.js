
// Break in a for loop 

let i = 0;
for( let i = 0; i <= 20; i++){
    if(i>15){
        break;
    }
    console.log(i);  
}

console.log("--------------------")
console.log("--------------------")
console.log("--------------------")
// Break in a while  loop 

let count = 0 ;
while(count<=20) {
    console.log(count);
    count++
    if(count>18){
        break;
    }
}
console.log("--------------------")
console.log("--------------------")
console.log("--------------------")
// when i use break for 95 that means the result will show 80; 
var numbers = [21, 50, 75, 60, 55, 30, 80, 95];

for(let i = 0; i<numbers.length; i++) {
 let value = numbers[i]
 if(value == 95) {
    break;
 }
 console.log(value);
}
console.log("--------------------")
console.log("--------------------")
console.log("--------------------")
// continue statement 
var series = [21, 50, 75, 60, 55, 30, 80, 95];

for(let i = 0; i<series.length; i++) {
    let quantity = series[i];
    if (quantity>60){
        continue;
    }
    console.log(quantity);
}
console.log("--------------------")
console.log("--------------------")
console.log("--------------------")