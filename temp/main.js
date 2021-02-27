// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function () {
//     //     return this.dob.getFullYear()
//     // }
//     // this.getFullName = function () {
//     //     return this.firstName + " " + this.lastName
//     // }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return this.firstName + " " + this.lastName;
// }

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const you = new Person('Hyeyul', 'Kim',1996-03-01);
console.log(you.getBirthYear())
console.log(you.getFullName())
console.log(you)