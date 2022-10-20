export class MenuController {
    constructor(gemPuzzle, frameComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
    }

    shuffleAndStart() {
        let { frame } = this.gemPuzzle.shuffleAndStart();
        this.frameComponent.updateFrame(frame.flat());
    }
}
