import { DnDContext } from "./drag-n-drop/DnDContext.js";
import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this.frameController = null;
        this.interactionLocked = false;
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

    lockInteraction() {
        this.interactionLocked = true;
    }

    unlockInteraction() {
        this.interactionLocked = false;
    }

    _addListeners() {
        // this.element.addEventListener("click", (event) => {
        //     if (this.interactionLocked) return;
        //     const squareElement = event.target.closest(".square");
        //     if (squareElement) {
        //         this.frameController.move(
        //             squareElement.square,
        //             squareElement.component
        //         );
        //     }
        // });

        this.element.addEventListener("mousedown", (event) => {
            if (this.interactionLocked) return;
            const squareElement = event.target.closest(".square");
            if (squareElement && !squareElement.square.isEmpty()) {
                this.dndContext = new DnDContext(squareElement, [
                    event.clientX,
                    event.clientY,
                ]);
            }
        });

        this.element.addEventListener("mousemove", (event) => {
            if (!this.dndContext || this.interactionLocked) return;
            this.frameController.drag(
                [event.clientX, event.clientY],
                this.dndContext
            );
        });

        document.addEventListener("mouseup", (event) => {
            if (!this.dndContext || this.interactionLocked) return;
            this.frameController.drop(
                [event.clientX, event.clientY],
                this.dndContext
            );
            this.dndContext = null;
        });
    }
}
