export class GameStateComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("state");
        this._render();
    }

    updateMoves(moves) {
        this.movesField.innerText = `Moves: ${moves}`;
    }

    startTimer(startTime) {
        this.stopTimer();
        this.timerId = setInterval(() => {
            let timeSpan = Math.round((Date.now() - startTime) / 1000);
            let minutes = Math.floor(timeSpan / 60);
            let seconds = timeSpan % 60;
            this.timerField.innerText = `Time: ${minutes}:${seconds}`;
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerId);
        this._initializeTimerField();
    }

    _render() {
        this.movesField = document.createElement("div");
        this.movesField.classList.add("moves-field");
        this.element.append(this.movesField);

        this.timerField = document.createElement("div");
        this.timerField.classList.add("timer-field");
        this._initializeTimerField();
        this.element.append(this.timerField);
    }

    _initializeTimerField() {
        this.timerField.innerText = `Time: 0:0`;
    }
}
