class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    // Calculate the balance using the transaction objects.
  let balance = 0;
  this.transactions.forEach(function(transaction) {
    balance += transaction.value;
  })
  return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  get isAllowed(){
    return this.account.balance + this.value > 0;
  }

  commit() {
    if(this.isAllowed){
      // Keep track of the time of the transaction
      this.time = new Date();
      // Add the transaction to the account
      this.account.addTransaction(this);
      return true;
    }else{
      return false;
    }
  }
}

class Deposit extends Transaction {
   // Update the balance in the account
  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

console.log("Name", myAccount.username, "Initial balance", myAccount.balance)

t1 = new Withdrawal(50.25, myAccount);
console.log('\nTransaction 1:', t1);
let res1 = t1.commit();
console.log('Commit result:', res1);
console.log('Balance:', myAccount.balance);

t2 = new Deposit(10, myAccount);
console.log('\nTransaction 2:', t2);
let res2 = t2.commit();
console.log('Commit result:', res2);
console.log('Balance:', myAccount.balance);

t3 = new Withdrawal(9.99, myAccount);
console.log('\nTransaction 3:', t3);
let res3 = t3.commit();
console.log('Commit result:', res3);
console.log('Balance:', myAccount.balance);

t4 = new Deposit(120.00, myAccount);
console.log('\nTransaction 4:', t4);
let res4 = t4.commit();
console.log('Commit result:', res4);
console.log('Balance:', myAccount.balance);

t5 = new Deposit(1120.00, myAccount);
console.log('\nTransaction 5:', t5);
let res5 = t5.commit();
console.log('Commit result:', res5);
console.log('Balance:', myAccount.balance);
