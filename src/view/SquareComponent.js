export class SquareComponent {
    constructor(square) {
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this._render(square);
    }

    _render(square) {
        this.element.innerText = square.number;
    }
}
