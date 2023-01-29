// 1. solution 

const text = [ "1. rat 8 tai module unlock korte hobe ", "2. video deke practice kora lagbe", "3. video dekte dekte notes nite hobe ", "4. module sese nije nije practice koro", "5.last support session a join koro"]

for ( let i = 0; i< text.length; i++) {
    let textStore = text[i];
    console.log(textStore);
}
console.log("----------------");
console.log("----------------");

// 2. solution

const sentence = ["** For while loop statement", "1. rat 8 tai module unlock korte hobe ", "2. video deke practice kora lagbe", "3. video dekte dekte notes nite hobe ", "4. module sese nije nije practice koro", "5.last support session a join koro"]

let init = 0;
while (init < sentence.length) {
    let sentenceStore = sentence[init]
    console.log(sentenceStore);
    init ++ ;
}

console.log("----------------");
console.log("----------------");

// 3. solution
const   sentenceDecrement = ["** For while loop decrement statement", "1. one ", "2. two", "3. three ", "4. four", "5.five"]

let data = sentenceDecrement.length-1;

while(data >=0) {
    let x = sentenceDecrement[data];
    data--
 console.log(x);
}

console.log("----------------");
console.log("----------------");

// 4. solution 

const  textreverse = ["** For loop decrement statement", "1. one ", "2. two", "3. three ", "4. four", "5.five"]


for ( let i = textreverse.length-1; i >= 0 ; i--){
    let result = textreverse[i];
    console.log(result);
}
