export class Square {
    constructor(number, i, j) {
        this.number = number;
        this.i = i;
        this.j = j;
    }

    isEmpty() {
        return this.number === null;
    }
}
