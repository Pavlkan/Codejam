export class CongratulationsComponent {
    constructor(gameState) {
        this.element = document.createElement("div");
        this.element.classList.add("congratulations-modal");
        this._render(gameState);
        this._addListeners();
    }

    _render(gameState) {
        let message = document.createElement("div");
        message.classList.add("congratulations-message");
        message.innerText = `Hooray! You solved the puzzle in ${gameState.getSpentTime()} and ${gameState.getMovesCount()} moves!`;
        this.element.append(message);

        this.button = document.createElement("button");
        this.button.classList.add("congratulations-button");
        this.button.innerText = `Got it!`;
        this.element.append(this.button);
    }

    _addListeners() {
        this.button.addEventListener("click", () => {
            this.element.remove();
        });
    }
}
