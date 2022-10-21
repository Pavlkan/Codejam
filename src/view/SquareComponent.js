export class SquareComponent {
    constructor(square) {
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this._render(square);
    }

    _render(square) {
        this.element.square = square;
        if (square.isEmpty()) {
            this.element.classList.add("empty");
        } else {
            this.element.innerText = square.number;
        }
    }
}
