export class SquareComponent {
    constructor(square, size) {
        this.element = document.createElement("div");
        this.element.classList.add("square");
        this._render(square, size);
    }

    animateMove(direction) {
        let width = this.element.getClientRects()[0].width;
        this.element.style.transform = this._getTranslation(width, direction);
        this.element.style.transition = `transform 0.5s`;
    }

    _render(square, size) {
        this.element.square = square;
        this.element.component = this;
        if (square.isEmpty()) {
            this.element.classList.add("empty");
        } else {
            this.element.innerText = square.number;
        }
        this.element.classList.add(size);
    }

    _getTranslation(width, direction) {
        if (direction === "top") {
            return `translateY(-${width}px)`;
        } else if (direction === "bottom") {
            return `translateY(${width}px)`;
        } else if (direction === "left") {
            return `translateX(-${width}px)`;
        } else {
            return `translateX(${width}px)`;
        }
    }
}
