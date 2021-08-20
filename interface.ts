abstract class BankAccount {
  welcomeMessage(): void {
    console.log("Welcome");
  }
  abstract deposit(amount: number): void;
  abstract withdrawal(amount: number): void;
  abstract balance();
}

interface IMyBank {
  openBankAccount(): void;
  closeBankAccount(): void;
}

interface IBankAccount extends IMyBank {
  deposit(): void;
  withdraw(): void;
  balance(): void;
}

class CheckingAccount implements IBankAccount, IMyBank {
  openBankAccount(): void {
    console.log("Opened an account");
  }
  closeBankAccount(): void {
    console.log("Closed the account");
  }
  deposit(): void {
    console.log("Deposited into the account");
  }
  withdraw(): void {
    console.log("Withdrawn from the account");
  }
  balance(): void {
    console.log("Total");
  }
}

var newAc = new CheckingAccount();
newAc.openBankAccount();
newAc.balance();
// other methods here
