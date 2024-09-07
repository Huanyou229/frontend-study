"use strict";
function createPerson(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        greet: function () {
            return `Hello, my name is ${this.firstName} ${this.lastName} a
nd I am ${this.age} years old.`;
        }
    };
}
const person = createPerson('John', 'Doe', 30);
// VSCode 会在这里提供智能提示，如显示person对象的属性和方法
console.log(person.greet());
