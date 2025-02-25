let age =9;
let isStudent=false;
let ticketPrice=500;

if (age<10)
{
    ticketPrice*=0;

}
else if(isStudent)
{
    ticketPrice*=.5;
}
else if(age>=50)
{
    ticketPrice=500-ticketPrice*(15/100);
}
else{
    ticketPrice=ticketPrice;
}
console.log(ticketPrice);