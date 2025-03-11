function checkDigitsInName(name)
{
    if (typeof name !=="string")
    {
        return "invalid Input";
    }
    else
    {
        for (let nm of name)
        {
            if (nm>='0' && nm<='9')
            {
                return true;
            }
            
        }
        return false;
    }
}

console.log(checkDigitsInName("sikto11"))


