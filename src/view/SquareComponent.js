export class SquareComponent {
    constructor(number) {
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this._render(number);
    }

    _render(number) {
        this.element.innerText = number;
    }
}
