export class DnD {
    constructor() {}

    move([x, y], context, direction) {
        let [offsetX, offsetY] = context.calculateOffset([x, y]);
        context.element.style.transform = this._getTranslation(
            [offsetX, offsetY],
            direction,
            context.element
        );
    }

    _getTranslation([offsetX, offsetY], direction, element) {
        if (direction === "top" || direction === "bottom") {
            return `translateY(${this._validateOffset(
                offsetY,
                element,
                direction
            )}px)`;
        } else if (direction === "left" || direction === "right") {
            return `translateX(${this._validateOffset(
                offsetX,
                element,
                direction
            )}px)`;
        }
    }

    _validateOffset(offset, element, direction) {
        let isPositive = direction === "right" || direction === "bottom";
        if ((isPositive && offset < 0) || (!isPositive && offset >= 0)) {
            return 0;
        }
        let maxOffset = element.getClientRects()[0].width;
        let resultOffset = Math.min(Math.abs(offset), maxOffset);
        return offset < 0 ? resultOffset * -1 : resultOffset;
    }
}
