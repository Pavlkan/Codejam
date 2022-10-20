import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this._render();
    }

    _render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        for (let number of numbers) {
            let square = new SquareComponent(number);
            this.element.append(square.element);
        }
    }
}
