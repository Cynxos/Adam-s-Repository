function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else if (typeof value === "string") {
        return "This is a string";
    }
    return "Unknown type";
}
