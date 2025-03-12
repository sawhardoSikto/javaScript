function waitingTime(waitingTimes,serialNumber)
{
    if (!Array.isArray(waitingTimes) || typeof serialNumber!=="number" )
    {
        return "invalid input";
    }
    else
    {
        if (serialNumber>waitingTimes.length)
        {

            let sum=0;
            for (let i=0;i<waitingTimes.length;i++)
            {
                sum+=waitingTimes[i];
            }
            let avg=Math.round((sum/(waitingTimes.length)));
            let leftpeople=(serialNumber-1)-waitingTimes.length;
        
            let totalTime=leftpeople*avg;
            return totalTime;
        }
        else{
            return "doesnot exist";
        }

    }


}
const arr=[13,2]
const serialNumber=6;
console.log(waitingTime(arr,serialNumber));
