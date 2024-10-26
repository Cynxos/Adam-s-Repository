type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "Anytown"
};

console.log(personWithAddress);
