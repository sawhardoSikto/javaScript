function noDuplicate(numbers)

{
    const arr=[];
    for (let number of numbers)
    {
        console.log(number);
        if(arr.includes(number)==false)
        {
            arr.push(number);

        }
    }
   return arr;


}

let value =[5,5,3,2,5,7,3];
const removeDuplicate=noDuplicate(value);
console.log(removeDuplicate);

console.log("______________________________");

function duplicateCount(numbers)
{
    let count=0;
    for (let number of numbers)
    {
        if (number===5)
        {
            count++;
        }
    }
    return count;
}
const arr=[5,9,6,6,5,5,5,4];
console.log(duplicateCount(arr));


console.log("_______________________");

function vowel(numbers)
{
    let count =0;
    for (let number of numbers)
    {
        if (number=='a' || number=='e'||number=='i'||number=='o'||number=='u')
        {
            count++;

        }

    }
    return count;
}
const vo="sikto";
console.log(vowel(vo));

console.log("__________________");

function findLongestWord(snetense)
{
    const words=snetense.split(" ");
    let longestWord="";
    for(let word of words)
    {
        if (word.length>longestWord.length)
        {
            longestWord=word;
        }
    }
    return longestWord;
}
const snetense="i love bangladesh";
console.log(findLongestWord(snetense));

console.log("________________________________");

function generateRandomNumber()
{
    return Math.floor(Math.random()*(20 - 10 + 1)) + 10;//Multiply by (20 - 10 + 1) (range size) to scale it between 0 and 11 and Add 10 to shift the range from [0, 11] to [10, 20].

}
console.log(generateRandomNumber());