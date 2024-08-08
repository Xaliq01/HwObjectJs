let person = {
    Name : "Michael",
    Surname : "Kade",
    Age : 27
    

}
let car = {
    Brend : "Audi",
    Model : "A6",
    color : "Blue"

}
let school = {
    WhereStudy : "Zerife Alieva",
}
let sport = {
    Judo :"Judo",
    swimming : "Swimming"
}
let programming = {
    know : "Html,Css,JavaScript",
    Teacher : "Teacher Rza",
    willLearn : "Phython"

}
let Hobby = {
    Activity : "Chess",
    Read : "Books"
}


console.log( `Hello , My name is ${person.Name},Surname is ${person.Surname}. I am ${person.Age} years old. I have a car ${car.Brend} ${car.Model}. My car is ${car.color}.I studied at ${school.WhereStudy}'s Lyceum.I was involved in sports such as ${sport.Judo} and ${sport.swimming}.I know programming languages such as ${programming.know}.My teacher was ${programming.Teacher}.Soon I will start learning ${programming.willLearn}.My hobbies are ${Hobby.Activity} and reading ${Hobby.Read}.

 `)
 document.getElementById("demo").innerHTML = `Hello , My name is ${person.Name},Surname is ${person.Surname}. I am ${person.Age} years old. I have a car ${car.Brend} ${car.Model}. My car is ${car.color}.I studied at ${school.WhereStudy}'s Lyceum.I was involved in sports such as ${sport.Judo} and ${sport.swimming}.I know programming languages such as ${programming.know}.My teacher was ${programming.Teacher}.Soon I will start learning ${programming.willLearn}.My hobbies are ${Hobby.Activity} and reading ${Hobby.Read}.`