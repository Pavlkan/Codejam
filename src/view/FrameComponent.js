import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this.frameController = null;
        this.clicksLocked = false;
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

    lockClicks() {
        this.clicksLocked = true;
    }

    unlockClicks() {
        this.clicksLocked = false;
    }

    _addListeners() {
        this.element.addEventListener("click", (event) => {
            if (this.clicksLocked) return;
            const squareElement = event.target.closest(".square");
            if (squareElement) {
                this.frameController.move(
                    squareElement.square,
                    squareElement.component
                );
            }
        });
    }
}
