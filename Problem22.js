//task 1
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseColor=[];
for(let i=colors.length-1;i>=0;i--)
{
    reverseColor.push(colors[i]);
}
console.log(reverseColor)

//task 2

const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumber=[];
for (let number of numbers)
{
    if (number%2==0)
    {
        evenNumber.push(number);
    }
}
console.log(evenNumber);

//task3 
var names= ['Tom', 'Tim', 'Tin', 'Tik'];
let fullString='';

for ( let name of names)
{
    fullString+=name;
}
console.log(fullString);

// var na= ['Tom', 'Tim', 'Tin', 'Tik'];
// console.log(na.join(''))

//task 4

const statement = 'I am a hard working person'
reverseStatement=statement.split(" ").reverse().join(" ")
console.log(reverseStatement)