//task 1
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors["golden rod"]);

//task2
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car.passengerCapacity=5;
//console.log(car)

for (let ac in car)
{
    console.log(ac,":",car[ac]);
}

//task 3

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics)

//task4
let students = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
arrayOfStudents=Object.keys(students)
console.log(arrayOfStudents);
let count=0;
for (let student of arrayOfStudents)
{
    count++;

}
console.log(count)

console.log("_______________________________________");
//tast5;
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(let object in myObject)
    {
        console.log(object,":",myObject[object],"| Type:",typeof(myObject[object]));
    }

