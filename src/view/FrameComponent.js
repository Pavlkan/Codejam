import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this.frameController = null;
        this._addListeners();
    }

    updateFrame(squares, size) {
        this.element.innerHTML = ``;
        let sizeClass = size === 4 ? "small" : "big";
        for (let square of squares) {
            let component = new SquareComponent(square, sizeClass);
            this.element.append(component.element);
        }
    }

    setController(controller) {
        this.frameController = controller;
    }

    _addListeners() {
        this.element.addEventListener("click", (event) => {
            const squareClicked = event.target.closest(".square");
            if (squareClicked) {
                const square = squareClicked.square;
                this.frameController.move(square);
            }
        });
    }
}
