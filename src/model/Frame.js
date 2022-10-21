import { Square } from "./Square.js";

export class Frame {
    constructor(size) {
        this.size = size;
        this.grid = this._generateFrame(size);
    }

    move(square) {
        let empty = this._getNearEmpty(square);
        if (!empty) return false;
        let updatedSquare = new Square(square.number, empty.i, empty.j);
        let updatedEmpty = new Square(empty.number, square.i, square.j);
        this.grid[empty.i][empty.j] = updatedSquare;
        this.grid[square.i][square.j] = updatedEmpty;
        return true;
    }

    _getNearEmpty(square) {
        const allowedMoves = [
            [square.i - 1, square.j],
            [square.i, square.j + 1],
            [square.i + 1, square.j],
            [square.i, square.j - 1],
        ];

        let empty = null;
        for (let [i, j] of allowedMoves) {
            const allowedMove = this.grid[i]?.[j];
            if (allowedMove?.isEmpty()) {
                return (empty = allowedMove);
            }
        }
        return empty;
    }

    _generateFrame(size) {
        let frame = [];
        for (let i = 0; i < size; i++) {
            frame.push([]);
            for (let j = 0; j < size; j++) {
                frame[i].push(new Square(i + j, i, j));
            }
        }
        frame[frame.length - 1][frame.length - 1] = new Square(
            NaN,
            size - 1,
            size - 1
        );
        return frame;
    }
}
