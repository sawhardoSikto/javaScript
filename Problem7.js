let myScore=90;
let myFriendScore=50;
if(myScore>80)
{
    if(myFriendScore>80)
    {

        console.log("go for lunch");
    }
    if (myFriendScore>=60 && myFriendScore<=79 )
    {
        console.log("Good luck next time");
        
    }
    if (myFriendScore>=40 && myFriendScore<=59 )
        {
            console.log("Ignore their message 📵");
            
        }
    if (myFriendScore<40)
    {
        console.log("block");
    }
}
else
{
    console.log("Go home, sleep, and act sad")
}