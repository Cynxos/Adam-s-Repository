const family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Emily"
};

for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}
