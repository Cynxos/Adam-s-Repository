const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people); 

people[people.indexOf("James")] = "Jason";
console.log(people);

people.push("Adam");
console.log(people);

console.log(people.indexOf("Mary"));

const peopleCopy = people.slice(1, 3);
console.log(peopleCopy);

console.log(people.indexOf("Foo"));

const last = people[people.length - 1];
console.log(last);

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break;
    }
}