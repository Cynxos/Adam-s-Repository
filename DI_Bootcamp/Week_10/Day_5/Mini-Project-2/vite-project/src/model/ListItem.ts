import { v4 as uuidv4 } from 'uuid';

export interface ITask {
    id: string;
    text: string;
    completed: boolean;
}

export class Task implements ITask {
    constructor(
        public id: string = uuidv4(),
        public text: string,
        public completed: boolean = false
    ) {}
}
