"use strict";
exports.__esModule = true;
exports.SalariedNamespace = void 0;
var SalariedNamespace;
(function (SalariedNamespace) {
    var Employee = /** @class */ (function () {
        function Employee(fName, lName) {
            this.firstName = fName;
            this.lastName = lName;
            Employee.empType = "Salaried";
        }
        Employee.prototype.showDetails = function () {
            console.log(this.firstName + " " + this.lastName);
        };
        return Employee;
    }());
    SalariedNamespace.Employee = Employee;
})(SalariedNamespace = exports.SalariedNamespace || (exports.SalariedNamespace = {}));
