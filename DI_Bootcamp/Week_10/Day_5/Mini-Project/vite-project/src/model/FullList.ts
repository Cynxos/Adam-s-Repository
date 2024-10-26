import { ListItem, IListItem } from './ListItem';

export class FullList {
    private list: ListItem[] = [];

    loadFromLocalStorage(): void {
        const savedList = localStorage.getItem('todoList');
        if (savedList) {
            this.list = JSON.parse(savedList).map((item: IListItem) => new ListItem(item.id, item.item, item.checked));
        }
    }

    saveToLocalStorage(): void {
        localStorage.setItem('todoList', JSON.stringify(this.list));
    }

    addItem(item: ListItem): void {
        this.list.push(item);
        this.saveToLocalStorage();
    }

    removeItem(id: string): void {
        this.list = this.list.filter(item => item.id !== id);
        this.saveToLocalStorage();
    }

    clearList(): void {
        this.list = [];
        this.saveToLocalStorage();
    }

    getList(): ListItem[] {
        return this.list;
    }
}
