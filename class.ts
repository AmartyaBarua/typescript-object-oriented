class Person {
  protected name: string;
  private age: number;
  private city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  displayDetails(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
  }
}

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
class Employee extends Person {
  private _empCode: number;
  private _empSalary: number;
  private dependants: string[] = [];

  private static totalDependantsCount: number = 0;
  private static maxDependantsCount: number = 4;

  //   Static Data Members
  private static companyName: string;
  private static country: string;

  constructor(
    name: string,
    age: number,
    city: string,
    code: number,
    salary: number
  ) {
    super(name, age, city);
    this._empCode = code;
    this._empSalary = salary;
    Employee.companyName = "CP";
    Employee.country = "US";
  }

  // getters
  get empCode(): number {
    return this._empCode;
  }
  get empSalary(): number {
    return this._empSalary;
  }

  // setters
  set empCode(newEmpCode: number) {
    this._empCode = newEmpCode;
  }
  set empSalary(newEmpSalary: number) {
    if (newEmpSalary < 5000) {
      throw new Error("Error: Minimum Salary should be 5000");
    } else {
      this._empSalary = newEmpSalary;
    }
  }

  //   methods
  displayDetails(): void {
    super.displayDetails();
    console.log(`Employee Code: ${this._empCode}`);
    // how to access protected member variables from child class
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee Salary: ${this._empSalary}`);
    console.log(`Employee Country: ${Employee.country}`);
  }

  addDependants(name: string) {
    if (this.dependants.length >= Employee.maxDependantsCount) {
      throw new Error("Exceeded maximum allowed dependants!");
    } else {
      this.dependants.push(name);
      Employee.totalDependantsCount++; // will increase the count of the Class not just one instance but all
    }
  }

  displayDependants() {
    for (var n of this.dependants) {
      console.log(n);
    }
  }

  static totalDependants() {
    return Employee.totalDependantsCount;
  }
}

var e1 = new Employee("Tom", 44, "New York", 1000, 60000);
e1.displayDetails();
e1.empCode = 1001;
e1.displayDetails();
e1.addDependants("Jerry");
e1.displayDependants();

// Abstract classes
abstract class BankAccount {
  welcomeMessage(): void {
    console.log("Welcome");
  }
  abstract deposit(amount: number): void;
  abstract withdrawal(amount: number): void;
  abstract balance();
}

class savingsAccount extends BankAccount {
  private total: number;

  constructor(total: number) {
    super();
    this.total = total;
  }

  deposit(amount: number) {
    if (amount >= 0) {
      this.total += amount;
    }
  }

  withdrawal(amount: number) {
    if (amount > 0 && amount <= this.total) {
      this.total -= amount;
    }
    console.log(this.total);
  }

  balance() {
    console.log(`Balance in Saving Account: ${this.total}`);
  }
}

var sa = new savingsAccount(5000);
sa.deposit(2000);
sa.withdrawal(1000);
sa.balance();

// Generic class
class MyArray<T> {
  private arr: T[] = [];

  addItem(item: T) {
    this.arr.push(item);
  }

  getItems(): T[] {
    return this.arr;
  }

  removeItem(item: T) {
    let index = this.arr.indexOf(item);
    if (index > -1) {
      this.arr.splice(index, 1);
    }
  }
}

var numObj = new MyArray<number>();
numObj.addItem(10);
numObj.removeItem(10);
