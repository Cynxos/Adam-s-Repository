const element = document.getElementById("myInput");
const inputElement = element as HTMLInputElement;
inputElement.value = "Hello, World!";

document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("myInput") as HTMLInputElement;
    if (element) {
        element.value = "Hello, World!";
        console.log(element.value); 
    }
});
