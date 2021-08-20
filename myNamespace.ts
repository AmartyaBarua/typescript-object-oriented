export namespace SalariedNamespace {
  export class Employee {
    firstName: string;
    lastName: string;
    static empType: string;

    constructor(fName: string, lName: string) {
      this.firstName = fName;
      this.lastName = lName;
      Employee.empType = "Salaried";
    }

    showDetails() {
      console.log(`${this.firstName} ${this.lastName}`);
    }
  }
}
