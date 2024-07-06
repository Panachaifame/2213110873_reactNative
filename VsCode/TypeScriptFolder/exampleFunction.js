//create array of person objectss
var people = [
    { name: "Jhon Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry kill", age: 35 }
];
//function to filter people who are least 30 year old
function filterAdults(persons) {
    return persons.filter(function (Person) { return Person.age > 30; });
}
//Using function anf logging the result
var adults = filterAdults(people);
console.log(adults);
