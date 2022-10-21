export class GameStateComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("state");
        this._render();
    }

    updateMoves(moves) {
        this.movesField.innerText = `Moves: ${moves}`;
    }

    _render() {
        this.movesField = document.createElement("div");
        this.movesField.classList.add("moves-field");
        this.element.append(this.movesField);
    }
}
