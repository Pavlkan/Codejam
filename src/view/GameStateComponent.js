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
        this._updateTimerField(startTime);
        this.timerId = setInterval(() => {
            this._updateTimerField(startTime);
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerId);
    }

    _updateTimerField(startTime) {
        let parsedTime = startTime ? this._parseTime(startTime) : `0:0`;
        this.timerField.innerText = `Time: ${parsedTime}`;
    }

    _parseTime(startTime) {
        let timeSpan = Math.round((Date.now() - startTime) / 1000);
        let minutes = Math.floor(timeSpan / 60);
        let seconds = timeSpan % 60;
        return `${minutes}:${seconds}`;
    }

    _render() {
        this.movesField = document.createElement("div");
        this.movesField.classList.add("moves-field");
        this.element.append(this.movesField);

        this.timerField = document.createElement("div");
        this.timerField.classList.add("timer-field");
        this._updateTimerField();
        this.element.append(this.timerField);
    }
}
