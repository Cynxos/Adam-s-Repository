function castToType<T>(value: any, constructor: (value: any) => T): T {
    return constructor(value);
}

const num = castToType<number>("123", Number);
console.log(num);  // Output: 123

const bool = castToType<boolean>("true", Boolean);
console.log(bool);  // Output: true
