export class MenuController {
    constructor(gemPuzzle, frameComponent, gameStateComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
    }

    shuffleAndStart() {
        this.gemPuzzle.shuffleAndStart();
        this.gameStateComponent.startTimer(
            this.gemPuzzle.getGameState().getStartTime()
        );
        this.gameStateComponent.updateMoves(
            this.gemPuzzle.getGameState().movesCount
        );
        this.frameComponent.updateFrame(
            this.gemPuzzle.getFrame().flat(),
            this.gemPuzzle.getSize()
        );
    }
}
