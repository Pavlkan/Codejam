import { ResultsComponent } from "../view/ResultsComponent.js";

export class MenuController {
    constructor(gemPuzzle, frameComponent, gameStateComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
    }

    shuffleAndStart() {
        this.gemPuzzle.shuffleAndStart();
        this._initializeGameView();
    }

    save() {
        this.gemPuzzle.saveResults();
    }

    loadAndStart() {
        this.gemPuzzle.loadAndStart();
        this._initializeGameView();
    }

    showResults() {
        let results = new ResultsComponent(this.gemPuzzle.getResults());
        document.body.append(results.element);
    }

    changeSize(size) {
        this.gemPuzzle.changeSize(size);
        this._initializeGameView();
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
