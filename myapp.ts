import { Person, Employee } from "./myModule";

var e1 = new Employee("Tom", 44, "New York", 1000, 60000);
e1.displayDetails();
e1.empCode = 1001;
e1.displayDetails();
e1.addDependants("Jerry");
e1.displayDependants();
