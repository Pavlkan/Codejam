export class SquareComponent {
    constructor(square, size) {
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this._render(square, size);
    }

    _render(square, size) {
        this.element.square = square;
        if (square.isEmpty()) {
            this.element.classList.add("empty");
        } else {
            this.element.innerText = square.number;
        }
        this.element.classList.add(size);
    }
}
