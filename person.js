class Person {
    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return `Helloooooo, This is my name: ${this.name}!`;
    }
}

module.exports = {
    Person,
};