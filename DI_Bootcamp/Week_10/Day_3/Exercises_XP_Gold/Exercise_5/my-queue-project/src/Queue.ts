import { Item } from './Item';

export class Queue<T> {
    private items: Item<T>[] = [];

    add(item: Item<T>): void {
        this.items.push(item);
    }

    remove(): Item<T> | undefined {
        return this.items.shift();
    }

    get length(): number {
        return this.items.length;
    }
}
