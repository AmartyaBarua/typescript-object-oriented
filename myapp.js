"use strict";
exports.__esModule = true;
var myModule_1 = require("./myModule");
var e1 = new myModule_1.Employee("Tom", 44, "New York", 1000, 60000);
e1.displayDetails();
e1.empCode = 1001;
e1.displayDetails();
e1.addDependants("Jerry");
e1.displayDependants();
