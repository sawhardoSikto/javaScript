//function task 1

function multiplication(number1,number2,number3,number4)
{
    let sum=number1*number2*number3*number4;
    return sum;
}
console.log(multiplication(3,4,5,6));


//task 2
console.log("_______________________________");
function isOdd(number)
{
    let sum=0;
    if (number%2!==0)
    {
        sum=number* 2;
        return sum;

    }
    else
    {
        sum =number/2;
        return sum;
    }

}
console.log("the number is:",isOdd(10));

//task3
console.log("_______________________________");

function Avg(number,size)
{
    let sum=0;
    let avg=0;

    for ( let i=0;i<size;i++)
    {
        sum=sum+number[i];
        
    }
    avg=sum/size
    return avg;

}
let arr=[4,5,6,7,5,4,5];
let lengthCount=arr.length;
console.log(Avg(arr,lengthCount).toFixed(2));

//task 4;
console.log("_______________________________");
function countZero(number)
{
    let count=0;
    for(let num of number)
    {
        if (num=='0')
        {
            count ++;

        }
    }
    return count;
}
console.log(countZero("010100011"));

//task 5;
console.log("_______________________________");
function odd_even(number)
{
    if(number%2==0)
    {
        return "Even";
    }
    else{
        return "Odd";
    }
}
console.log(odd_even(5));