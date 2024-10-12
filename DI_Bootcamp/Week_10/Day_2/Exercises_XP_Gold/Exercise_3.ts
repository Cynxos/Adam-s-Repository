class MathUtils {
    static readonly PI: number = 3.14159;

    static circumference(radius: number): number {
        return 2 * MathUtils.PI * radius;
    }
}

console.log(MathUtils.circumference(5)); // Output: 31.4159
