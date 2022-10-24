export class AutoCloser {
    constructor() {}

    completeMove([x, y], context, direction) {
        let [offsetX, offsetY] = context.calculateOffset([x, y]);
        return this._setTranslation(
            [offsetX, offsetY],
            direction,
            context.element
        );
    }

    rollBackMove(context, direction) {
        context.element.style.transition = "transform 0.3s ease-out";
        if (direction === "top" || direction === "bottom") {
            context.element.style.transform = "translateY(0px)";
        } else if (direction === "left" || direction === "right") {
            context.element.style.transform = "translateX(0px)";
        }
    }

    _setTranslation([offsetX, offsetY], direction, element) {
        element.style.transition = "transform 0.3s ease-out";
        if (direction === "top" || direction === "bottom") {
            let offset = this._getOffset(offsetY, element);
            element.style.transform = `translateY(${this._getOffset(
                offsetY,
                element
            )}px)`;
            return offset !== 0;
        } else if (direction === "left" || direction === "right") {
            let offset = this._getOffset(offsetX, element);
            element.style.transform = `translateX(${this._getOffset(
                offsetX,
                element
            )}px)`;
            return offset !== 0;
        }
    }

    _getOffset(offset, element) {
        let maxOffset = element.getClientRects()[0].width;
        let shouldComplete = Math.abs(offset) > maxOffset / 2;
        let resultOffset = shouldComplete ? maxOffset : 0;
        return offset < 0 ? resultOffset * -1 : resultOffset;
    }
}
