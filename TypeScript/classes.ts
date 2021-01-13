interface UserInterface {
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}
interface UserInterface2 {
    name: number;

}

class User implements UserInterface, UserInterface2 {
    name;
    email;
    // public age: number;
    age;

    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }

    register() {
        console.log(this.name + ' is now registered')
    }

    payInvoice() {
        console.log(this.name + ' paid invoice')
    }
}
let john = new User(777, 'jdoe@gmail.com', 34);
john.register()

class Member extends User {
    id: number = 77;

    constructor(id: number, name: string, email: string, age: number) {
        super(name, email, age);
        this.id = id;
    }

    payInvoice() {
        super.payInvoice()
    }
}
// let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33)
// mike.payInvoice()