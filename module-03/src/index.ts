// ALL ABOUT CLASS

/*

class Player {
  //   name: string;
  //   country: string;
  //   score: number;

  constructor(
    public name: string,
    public country: string,
    public score: number
  ) {
    // this.name = name;
    // this.country = country;
    // this.score = score;
  }

  getDetails() {
    return this.name + " is a " + this.country + "i player";
  }
}

const player1 = new Player("Tamim", "Bangladesh", 134);

console.log(player1.getDetails());




class Developer {
  title: string;
  date: string;
  salary: number;

  constructor(title: string, date: string, salary: number) {
    this.title = title;
    this.date = date;
    this.salary = salary;
  }

  getSalary() {
    return "$" + this.salary + " usd is deposit to your bank.";
  }
}

class Backend extends Developer {
  constructor(title: string, date: string, salary: number) {
    super(title, date, salary);
  }
}

const developer = new Backend("Backend Developer", "31 March", 3000);

console.log(developer.getSalary());



class BankAccount {
  readonly id: number;
  name: string;
  private _balance: number;
  email: string;

  constructor(id: number, name: string, _balance: number, email: string) {
    this.id = id;
    this.name = name;
    this._balance = _balance;
    this.email = email;
  }

  deposit(amount: number) {
    return (this._balance += amount);
  }

  withdraw(amount: number) {
    if (amount > this._balance || amount < 0) {
      return "You cannot withdraw more than " + this._balance;
    }
    return (
      "Withdraw successful!!. You current _balance is " +
      (this._balance -= amount)
    );
  }

  get balance() {
    return this._balance;
  }

  set addMoney(amount: number) {
    this._balance += amount;
  }
}

const user = new BankAccount(111, "ABC", 1000, "abc@gmail.com");

user.deposit(1000);
user.withdraw(1000);
user.deposit(5000);

user.addMoney = 1000;

console.log(user.balance);
*/

// STATIC PROPERTIES

class Counter {
  static count: number = 0;

  increment(amount?: number): number {
    if (typeof amount === "number") {
      return (Counter.count += amount);
    } else {
      return (Counter.count += 1);
    }
  }
  decrement(amount?: number): number {
    if (typeof amount === "number") {
      return (Counter.count -= amount);
    } else {
      return (Counter.count -= 1);
    }
  }
}

const counter1 = new Counter();
const counter2 = new Counter();

console.log(counter1.increment(10));
console.log(counter2.increment(10));
