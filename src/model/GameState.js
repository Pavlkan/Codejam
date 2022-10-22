export class GameState {
    constructor(movesCount = 0, startTime = NaN) {
        this.movesCount = movesCount;
        this.spentTime = NaN;
        this.startTime = startTime;
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
