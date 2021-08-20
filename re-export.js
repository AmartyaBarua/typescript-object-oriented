"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log(this.name + " " + this.age);
    };
    return Person;
}());
exports.Person = Person;
