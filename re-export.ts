export class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  displayDetails() {
    console.log(`${this.name} ${this.age}`);
  }
}
