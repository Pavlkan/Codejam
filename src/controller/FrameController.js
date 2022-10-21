export class FrameController {
    constructor(gemPuzzle, frameComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
    }

    move(square) {
        let frame = this.gemPuzzle.move(square);
        this.frameComponent.updateFrame(frame.flat());
    }
}
