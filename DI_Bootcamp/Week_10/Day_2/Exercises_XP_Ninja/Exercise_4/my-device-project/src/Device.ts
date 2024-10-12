export class Device {
    readonly serialNumber: string;

    constructor(serialNumber: string) {
        this.serialNumber = serialNumber;
    }

    public getInfo(): string {
        return `Serial Number: ${this.serialNumber}`;
    }
}
