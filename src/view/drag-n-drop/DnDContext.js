export class DnDContext {
    constructor(element, initialCoordinates) {
        this.element = element; 
        this.initialCoordinates = initialCoordinates;
    }

    calculateOffset([x, y]) {
        let [originalX, originalY] = this.initialCoordinates;
        return [x - originalX, y - originalY];
    }
}
