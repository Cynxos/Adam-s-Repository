type Name = {
    name: string;
};

type Age = {
    age: number;
};

type ItemType = Name & Age;

export class Container<T extends ItemType> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    remove(): T | undefined {
        return this.items.pop();
    }

    list(): T[] {
        return this.items;
    }
}
