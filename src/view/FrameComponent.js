import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
    }

    updateFrame(squares) {
        for (let square of squares) {
            let component = new SquareComponent(square);
            this.element.append(component.element);
        }
    }
}
