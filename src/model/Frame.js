import { Square } from "./Square.js";

export class Frame {
    constructor(size, numbers) {
        this.size = size;
        this.grid = numbers
            ? this._generateFrame(size, numbers)
            : this._generateFrame(size);
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

    isCompleted() {
        let first = this.grid[0][0];
        let last = this.grid[this.size - 1][this.size - 1];
        if (!first.isEmpty() && !last.isEmpty()) return false;
        let numbers = this.grid.flat().filter((square) => !square.isEmpty());
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i].number !== i + 1) return false;
        }
        return true;
    }

    getMoveDirection(square) {
        let empty = this._getNearEmpty(square);
        if (!empty) return null;
        if (square.i < empty.i) {
            return "bottom";
        } else if (square.i > empty.i) {
            return "top";
        } else if (square.j < empty.j) {
            return "right";
        } else {
            return "left";
        }
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

    _getArray() {
        let arr = this._fillArr([null], this.size ** 2);
        if (this._checkCombinations(arr)) {
            return arr;
        } else return this._getArray();
    }

    _fillArr(arr, arrLength) {
        if (arr.length === arrLength) return arr;
        let number = this._getRandomInt(1, this.size ** 2);
        if (!arr.includes(number)) arr.push(number);
        return this._fillArr(arr, arrLength);
    }

    _checkCombinations(arr) {
        let chaosSum = 1;
        for (let i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            for (let j = i; j < arr.length; j++) {
                let comparedNumber = arr[j];
                if (
                    currentNumber &&
                    comparedNumber &&
                    currentNumber < comparedNumber
                )
                    chaosSum++;
            }
        }
        return chaosSum % 2 === 0;
    }

    _generateFrame(size, valuesArr = this._getArray()) {
        let frame = [];
        let indexCounter = 0;
        for (let i = 0; i < size; i++) {
            frame.push([]);
            for (let j = 0; j < size; j++) {
                frame[i].push(new Square(valuesArr[indexCounter], i, j));
                indexCounter++;
            }
        }
        return frame;
    }

    _getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
