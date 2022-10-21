import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this.controller = null;
        this._addListeners();
    }

    updateFrame(squares) {
        this.element.innerHTML = ``;
        for (let square of squares) {
            let component = new SquareComponent(square);
            this.element.append(component.element);
        }
    }

    setController(controller) {
        this.controller = controller;
    }

    _addListeners() {
        this.element.addEventListener("click", (event) => {
            const squareClicked = event.target.closest(".square");
            if (squareClicked) {
                const square = squareClicked.square;
                this.controller.move(square);
            }
        });
    }
}
