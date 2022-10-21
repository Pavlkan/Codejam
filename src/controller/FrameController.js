export class FrameController {
    constructor(gemPuzzle, frameComponent, gameStateComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
        let movesCount = this.gemPuzzle.getGameState().movesCount;
        this.gameStateComponent.updateMoves(movesCount);
    }

    move(square) {
        let successMove = this.gemPuzzle.move(square);
        if (successMove) {
            let movesCount = this.gemPuzzle.getGameState().movesCount;
            this.gameStateComponent.updateMoves(movesCount);
            this.frameComponent.updateFrame(this.gemPuzzle.getFrame().flat());
        }
    }
}
