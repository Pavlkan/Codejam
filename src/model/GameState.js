export class GameState {
    constructor() {
        this.movesCount = 0;
        this.spentTime = NaN;
    }

    updateMoves() {
        this.movesCount++;
    }

    startTimer() {
        this.startTime = Date.now();
        this.spentTime = NaN;
    }

    stopTimer() {
        this.spentTime = Date.now() - this.startTime;
    }

    getStartTime() {
        return this.startTime;
    }

    getSpentTime() {
        return this.spentTime;
    }
}
