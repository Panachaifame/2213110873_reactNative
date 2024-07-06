interface Person{
    name:String;
    age:number;
}
//create array of person objectss
const people: Person[]=[
    {name:"Jhon Lee",age :30},
    {name:"Marry Burner",age :25},
    {name:"Harry kill",age :35}
]
//function to filter people who are least 30 year old
function filterAdults(persons:Person[]):Person[]{
    return persons.filter(Person=>Person.age>30);
}
//Using function anf logging the result
const adults = filterAdults(people);
console.log(adults)