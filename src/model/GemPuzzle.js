import { Frame } from "./Frame.js";
import { GameState } from "./GameState.js";

export class GemPuzzle {
    constructor(size) {
        this.size = size;
        this.state = new GameState();
    }

    shuffleAndStart() {
        this.state = new GameState();
        this.state.startTimer();
        this.frame = new Frame(this.size);
    }

    move(square) {
        let successMove = this.frame.move(square);
        if (successMove) {
            this.state.updateMoves();
        }
        return successMove;
    }

    getFrame() {
        return this.frame.grid;
    }

    getGameState() {
        return this.state;
    }

    getSize() {
        return this.size;
    }

    saveResults() {}

    getResults() {}
}
