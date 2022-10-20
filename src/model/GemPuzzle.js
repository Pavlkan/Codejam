import { Frame } from "./Frame.js";

export class GemPuzzle {
    constructor(size) {
        this.size = size;
        this.frame = null;
    }

    shuffleAndStart() {
        return (this.frame = new Frame(this.size));
    }

    saveResults() {}

    getResults() {}
}
