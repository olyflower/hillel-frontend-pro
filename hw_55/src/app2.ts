const a:number = 12;
const b:number = 13;

console.log(a + b, 'A+B FROM TS');


interface Person {
    lastName: string
    firstName: string
    middleName: string
    toDo: (a: string) => string
}

const person: Person = {
    lastName: "John",
    firstName: "John",
    middleName: "John",
    toDo: (a: string) => {
        return 'true';
    }
};


console.log(person, 'person');
