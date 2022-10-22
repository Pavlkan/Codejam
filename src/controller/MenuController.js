export class MenuController {
    constructor(gemPuzzle, frameComponent, gameStateComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
    }

    shuffleAndStart() {
        this.gemPuzzle.shuffleAndStart();
        this._initializeGameView();
        this.gameStateComponent.updateTimerField();
    }

    save() {
        this.gemPuzzle.saveResults();
    }

    loadAndStart() {
        this.gemPuzzle.loadAndStart();
        this._initializeGameView();
        this.gameStateComponent.updateTimerField(
            this.gemPuzzle.getGameState().getStartTime()
        );
    }

    _initializeGameView() {
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
