export class MenuController {
    constructor(gemPuzzle, frameComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
    }

    shuffleAndStart() {
        let { grid } = this.gemPuzzle.shuffleAndStart();
        this.frameComponent.updateFrame(grid.flat());
    }
}
