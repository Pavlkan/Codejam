import { Square } from "./Square.js";

export class Frame {
    constructor(size) {
        this.size = size;
        this.frame = this._generateFrame(size);
    }

    _generateFrame(size) {
        let frame = [];
        for (let i = 0; i < size; i++) {
            frame.push([]);
            for (let j = 0; j < size; j++) {
                frame[i].push(new Square(i + j));
            }
        }
        return frame;
    }
}
