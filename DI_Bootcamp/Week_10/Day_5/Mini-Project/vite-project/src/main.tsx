import { FullList } from './model/FullList';
import { ListItem } from './model/ListItem';
import { ListTemplate } from './templates/ListTemplate';

const fullList = new FullList();
const ulElement = document.getElementById('listItems') as HTMLUListElement;
const listTemplate = new ListTemplate(ulElement);

document.getElementById('itemEntryForm')!.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newItem') as HTMLInputElement;
    if (input.value.trim() === '') return;

    const newItem = new ListItem(undefined, input.value);
    fullList.addItem(newItem);
    listTemplate.render(fullList);

    input.value = '';
});

document.getElementById('clearItemsButton')!.addEventListener('click', () => {
    fullList.clearList();
    listTemplate.render(fullList);
});

fullList.loadFromLocalStorage();
listTemplate.render(fullList);
