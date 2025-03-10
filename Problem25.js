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


console.log("____________________________________");

function lowestnumber(numbers)
{
    let lower=numbers[0];
    for (let number of numbers)
    {
        if(number<lower)
        {
            lower=number;

        }


    }
    return lower;
}

const heights2 = [167, 190, 120, 165, 137];

console.log(lowestnumber(heights2));

console.log("__________________________________________");

function smallestName(names)
{
    let lower=names[0];
    for(let name of names)
    {
        if(name.length<lower.length)
        {
            lower=name;
        }
    }
    return lower
}

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallestName(heights3));

console.log("________________________");


function totalBudget(laptopQuan,tabletQuan,mobileQuan)
{
   const laptop = 35000 ;
    const tablet = 15000 ;
    const mobile = 20000 ;

    let laptopPrice=laptop*laptopQuan;
    let tabletPrice=tablet*tabletQuan;
    let mobilePrice=mobile*mobileQuan
    let totalPrice=laptopPrice+tabletPrice+mobilePrice;
    return totalPrice
    
}
console.log(totalBudget(5,5,6));

console.log("______________________________");

function findAveragePhonePrice(arrayOfObject,size)
{
    let sum=0;
    for(let number of arrayOfObject)
    {
         sum=sum+ number.price;
    }
    let avg=sum/size;
    return avg.toFixed(2);

}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
const size=phones.length
console.log(findAveragePhonePrice(phones,size));


console.log("_____________________");

function totalSalary(arrayOfObject)
{
    let abc=0
    for (let num of arrayOfObject )
        {
           abc+=(num.starting+(num.experience*num.increment));

        } 
        return abc
}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

console.log(totalSalary(employees));

console.log("_____________________________");

// problem 1 : helo the zoo manager

function calculateMoney(quantityOfTicket)
{   
    let sum=0;
    if (quantityOfTicket<0)
    {
        return "Invalid Number";
    }
    else
    {
        sum=(120*quantityOfTicket)-(500+(8*50));
        return sum;
    }
    
}
console.log(calculateMoney(-130));
console.log("_____________________________");

//check name which is good or which is bad

function checkName(name)
{
    if (typeof name=="string")
    {

        let lowercase=name.toLowerCase();
        let lastchar=lowercase[lowercase.length-1];
        if(lastchar=='a' || lastchar=='y' || lastchar=='i' || lastchar=='e' || lastchar=='o' || lastchar=='u' || lastchar=='u' || lastchar=='w' )
            {
                return "good name";
            } 
            else
            {
                return "bad name"
            }
    }
    else
    {
        return "invalid";
    }
    

}
console.log(checkName("sikto"));
console.log("________________________");

function calculateTax(income,expense)
{
    if(income<0 || expense<0 || expense>income)
    {
        return "invalid input";
    }
    else
    {
        let sub=income-expense;
        let tax=sub*.2;
        return tax;
    }


}
console.log(calculateTax(10000,3000));
console.log(calculateTax(1000,3000));

console.log("________________________");

function sendNotification(email) {
    if (!email.includes("@") || email.indexOf("@") !== email.lastIndexOf("@")) {
        return "Invalid Email";
    } 
    else {
        let split = email.split("@");
        let part1 = split[0];
        let part2 = split[1];
        return part1 + " sent you an email from " + part2;
    }
}

console.log(sendNotification('siktobiswas@gmail.com'));  
console.log(sendNotification('siktobiswas@@gmail.com')); 
console.log(sendNotification('siktobiswasgmail.com'));  
