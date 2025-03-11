function calculateFinalScore(obj)
{
    
    if (typeof obj!=="object")
    {
        return "invalid input"
    }
    else
    {
        let sum=0;
        if(obj.isFinite)
        {
            sum=obj.testScore+obj.schoolGrade+20;
            if (sum>=80)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            sum =obj.testScore+obj.schoolGrade;
            if(sum>=80)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
       

    }
    
}

const obj={ 
     name: "Rajib",
     testScore: 45, 
     schoolGrade: 25,
     isFFamily : false  
    }
   const obj2= "hello" ;
console.log(calculateFinalScore(obj));
console.log(calculateFinalScore(obj2));

