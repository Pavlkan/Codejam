import { DnDContext } from "./drag-n-drop/DnDContext.js";
import { SquareComponent } from "./SquareComponent.js";

export class FrameComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("frame");
        this.frameController = null;
        this.interactionLocked = false;
        this.skipNextClick = false;
        this._addListeners();
    }

    updateFrame(squares, size) {
        this.element.innerHTML = ``;
        let sizeClass = this._setFrameSize(size);
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

    _setFrameSize(size) {
        let sizeMap = {
            8: "eight",
            7: "seven",
            6: "six",
            5: "five",
            4: "small",
            3: "big",
            2: "huge",
        };
        return sizeMap[size];
    }

    _addListeners() {
        this.element.addEventListener("click", (event) => {
            if (this.skipNextClick) {
                this.skipNextClick = false;
                return;
            }
            if (this.interactionLocked) return;
            const squareElement = event.target.closest(".square");
            if (squareElement) {
                this.frameController.move(
                    squareElement.square,
                    squareElement.component
                );
            }
        });

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
            if (this._isInFrame(event.clientX, event.clientY)) {
                if (this._isDndEvent(event.clientX, event.clientY)) {
                    this.frameController.drop(
                        [event.clientX, event.clientY],
                        this.dndContext
                    );
                    this.skipNextClick = true;
                }
            } else {
                this.frameController.rollBackDrag(this.dndContext);
                this.skipNextClick = true;
            }
            this.dndContext = null;
        });
    }

    _isInFrame(x, y) {
        let rect = this.element.getClientRects()[0];
        let isInFrameX = x >= rect.left && x <= rect.left + rect.width;
        let isInFrameY = y >= rect.top && y <= rect.top + rect.height;
        return isInFrameX && isInFrameY;
    }

    _isDndEvent(x, y) {
        let [originalX, originalY] = this.dndContext.initialCoordinates;
        return originalX !== x || originalY !== y;
    }
}
