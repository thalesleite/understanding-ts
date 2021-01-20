"use strict";
class Person1 {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person1("Thales");
user1.greet("Hi there - I am");
//# sourceMappingURL=interfaces.js.map