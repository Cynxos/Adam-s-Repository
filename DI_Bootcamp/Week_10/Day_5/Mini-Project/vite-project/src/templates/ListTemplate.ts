import { FullList } from '../model/FullList';

export class ListTemplate {
    private ulElement: HTMLUListElement;

    constructor(ulElement: HTMLUListElement) {
        this.ulElement = ulElement;
    }

    render(list: FullList): void {
        this.ulElement.innerHTML = '';
        list.getList().forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.item;

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = item.checked;
            checkbox.addEventListener('change', () => {
                item.toggleChecked();
                list.saveToLocalStorage();
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                list.removeItem(item.id);
                this.render(list);
            });

            li.appendChild(checkbox);
            li.appendChild(deleteButton);
            this.ulElement.appendChild(li);
        });
    }
}
