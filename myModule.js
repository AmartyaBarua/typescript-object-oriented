"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Employee = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.displayDetails = function () {
        console.log("Name: " + this.name + ", Age: " + this.age + ", City: " + this.city);
    };
    return Person;
}());
exports.Person = Person;
// Inheritance
// access modifiers
/**
 * Public: default no need to declare
 * Private: a private member cannot be accessed outside of its containing class
 * Protected: a protected member cannot be accessed outside of its containing class
 *              only other members (variables/functions) in the contaning class and
 *              subclasses can access a protected member.
 */
/**
 * Data members of a class:
 *  1. Instance Members: members of the the class type and its instance
 *  2. Static Members: declared with the keyword static and belong only to the class and
 *                      not the instances. Memory is allocated only once to the static
 *                      members
 */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, city, code, salary) {
        var _this = _super.call(this, name, age, city) || this;
        _this.dependants = [];
        _this._empCode = code;
        _this._empSalary = salary;
        Employee.companyName = "CP";
        Employee.country = "US";
        return _this;
    }
    Object.defineProperty(Employee.prototype, "empCode", {
        // getters
        get: function () {
            return this._empCode;
        },
        // setters
        set: function (newEmpCode) {
            this._empCode = newEmpCode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "empSalary", {
        get: function () {
            return this._empSalary;
        },
        set: function (newEmpSalary) {
            if (newEmpSalary < 5000) {
                throw new Error("Error: Minimum Salary should be 5000");
            }
            else {
                this._empSalary = newEmpSalary;
            }
        },
        enumerable: false,
        configurable: true
    });
    //   methods
    Employee.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Employee Code: " + this._empCode);
        // how to access protected member variables from child class
        console.log("Employee Name: " + this.name);
        console.log("Employee Salary: " + this._empSalary);
        console.log("Employee Country: " + Employee.country);
    };
    Employee.prototype.addDependants = function (name) {
        if (this.dependants.length >= Employee.maxDependantsCount) {
            throw new Error("Exceeded maximum allowed dependants!");
        }
        else {
            this.dependants.push(name);
            Employee.totalDependantsCount++; // will increase the count of the Class not just one instance but all
        }
    };
    Employee.prototype.displayDependants = function () {
        for (var _i = 0, _a = this.dependants; _i < _a.length; _i++) {
            var n = _a[_i];
            console.log(n);
        }
    };
    Employee.totalDependants = function () {
        return Employee.totalDependantsCount;
    };
    Employee.totalDependantsCount = 0;
    Employee.maxDependantsCount = 4;
    return Employee;
}(Person));
exports.Employee = Employee;
