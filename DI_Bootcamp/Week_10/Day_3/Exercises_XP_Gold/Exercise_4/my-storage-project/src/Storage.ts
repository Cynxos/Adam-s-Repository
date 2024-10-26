export interface Storage<T> {
    add(item: T): void;
    get(index: number): T | undefined;
}
