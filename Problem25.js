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

