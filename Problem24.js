function inchTofeet(number)
{
    let intergerValue=(number/12);
    let paserIntValue=parseInt(intergerValue);
    let floatValue=number%12;
    console.log(paserIntValue +"ft"+ floatValue+ "inch");

}
inchTofeet(6);
inchTofeet(30)