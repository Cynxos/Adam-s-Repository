interface HasNumericProperty {
    [key: string]: number;
}

function multiplyProperty(obj: HasNumericProperty, key: string, factor: number): number {
    if (key in obj) {
        return obj[key] * factor;
    } else {
        throw new Error(`Property ${key} does not exist on the object.`);
    }
}

const data = {
    value1: 10,
    value2: 20,
    value3: 30
};

console.log(multiplyProperty(data, "value1", 2)); // Output: 20
console.log(multiplyProperty(data, "value2", 3)); // Output: 60
console.log(multiplyProperty(data, "value3", 4)); // Output: 120
