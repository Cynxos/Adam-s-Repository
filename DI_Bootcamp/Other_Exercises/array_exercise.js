let users = ["John", "Mark", "Jane"];

let arr = [];
users.forEach((item) => {
    arr.push(item + " " + "Doe");
    console.log(item);
    arr.push(item + "@gmail.com");
});
console.log(arr);