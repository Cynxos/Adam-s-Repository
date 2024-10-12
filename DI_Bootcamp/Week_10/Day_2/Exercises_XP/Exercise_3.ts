class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): string {
        return "Some generic sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): string {
        return "Bark";
    }
}

const myDog = new Dog("Buddy");
console.log(myDog.makeSound()); // Output: Bark
