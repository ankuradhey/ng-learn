function Logger(): any{
    
    return function(target: any, prop: any, descriptor: PropertyDescriptor){
        let originalMethod = descriptor.value;
        descriptor.value = function(){
            var result = originalMethod.apply(this, arguments);
            console.log(`Customer ${arguments[0]}ed with amount ${arguments[1]} and now have balance of ${result}`);
            return result;
        }
        return descriptor;
    }
}

type CustomerType = {
    name:string;
    accountType: string;
    balance: number;
}

function Info(value: CustomerType) {
    return function(target: any){
        Object.defineProperties(target.prototype, {
            name: {
                value: value.name,
                writable: true
            },
            accountType: {
                value: value.accountType,
                writable: true
            },
            balance: {
                value: value.balance,
                writable: true
            }
        })
    }
}

function Entity(target: any){

    Object.defineProperty(target.prototype, 'entity', {
        value: true
    })

}

/**
 * Customer class
 */
@Entity
@Info({name: 'ankit', accountType:'savings', balance: 200})
class Customer{
    private balance: number;
    private name: string;
    private accountType: string;
    private entity: boolean;

    constructor(){}

    @Logger()
    transact(transactionType:'credit' | 'debit', amount: number = 0){
        if(transactionType === 'credit'){
            return this.credit(amount);
        } else{
            return this.debit(amount);
        }
    }

    credit(amount: number){
        this.balance += amount;
        return this.balance;
    }

    debit(amount: number){
        if(this.balance > amount)
            this.balance -= amount;
        
        return this.balance;
    }

    getInfo(){
        console.log(`Customer ${this.name} have ${this.accountType} account and have balance of amount ${this.balance} `);
    }

    isEntityType(){
        return !!this.entity;
    }

}

let customer = new Customer();
customer.transact('credit',100);
customer.transact('debit', 50);
customer.getInfo();
console.log(`Customer class is an entity type - `,customer.isEntityType())