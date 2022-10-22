import { Frame } from "./Frame.js";
import { GameState } from "./GameState.js";
import { GameStateStorage } from "./GameStateStorage.js";

export class GemPuzzle {
    constructor(size) {
        this.size = size;
        this.state = new GameState();
        this.gameCompleted = false;
        this.gameStateStorage = new GameStateStorage();
    }

    shuffleAndStart() {
        this.state = new GameState();
        this.state.startTimer();
        this.frame = new Frame(this.size);
        this.gameCompleted = false;
    }

    loadAndStart() {
        let savedGameState = this.gameStateStorage.load();
        if (!savedGameState) return;
        this.state = new GameState(
            savedGameState.state.movesCount,
            Date.now() - savedGameState.state.timeSpan
        );
        this.frame = new Frame(
            savedGameState.frame.size,
            savedGameState.frame.grid
        );
        this.size = savedGameState.frame.size;
        this.gameCompleted = false;
    }

    move(square) {
        if (this.gameCompleted) return false;
        let successMove = this.frame.move(square);
        if (successMove) {
            this.state.updateMoves();
            this.gameCompleted = this.frame.isCompleted();
            if (this.gameCompleted) {
                this.state.stopTimer();
            }
        }
        return successMove;
    }

    getMoveDirection(square) {
        return this.frame.getMoveDirection(square);
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

    isCompleted() {
        return this.gameCompleted;
    }

    saveResults() {
        if (this.frame && this.state && !this.gameCompleted) {
            this.gameStateStorage.save(this.state, this.frame);
        }
    }

    getResults() {}
}
