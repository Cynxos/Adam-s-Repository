export class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    retrieve(index: number): T | undefined {
        return this.items[index];
    }

    list(): T[] {
        return this.items;
    }
}

const numberRepo = new Repository<number>();
numberRepo.add(1);
numberRepo.add(2);
console.log(numberRepo.retrieve(0)); // Output: 1
console.log(numberRepo.list());      // Output: [1, 2]

const stringRepo = new Repository<string>();
stringRepo.add("hello");
stringRepo.add("world");
console.log(stringRepo.retrieve(1)); // Output: world
console.log(stringRepo.list());      // Output: ["hello", "world"]
