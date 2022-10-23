import { CongratulationsComponent } from "../view/CongratulationsComponent.js";
import { DnD } from "../view/drag-n-drop/DnD.js";

export class FrameController {
    constructor(gemPuzzle, frameComponent, gameStateComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
        let movesCount = this.gemPuzzle.getGameState().movesCount;
        this.gameStateComponent.updateMoves(movesCount);
        this.dnd = new DnD();
    }

    drag([x, y], context) {
        let isGameCompleted = this.gemPuzzle.isCompleted();
        let direction = this.gemPuzzle.getMoveDirection(context.element.square);
        if (!direction || isGameCompleted) return;
        this.dnd.move([x, y], context, direction);
    }

    drop([x, y], context) {
        let isGameCompleted = this.gemPuzzle.isCompleted();
        let direction = this.gemPuzzle.getMoveDirection(context.element.square);
        if (!direction || isGameCompleted) return;
        this.gemPuzzle.move(context.element.square);
        let movesCount = this.gemPuzzle.getGameState().movesCount;
        this.gameStateComponent.updateMoves(movesCount);
        this.frameComponent.updateFrame(
            this.gemPuzzle.getFrame().flat(),
            this.gemPuzzle.getSize()
        );
        if (this.gemPuzzle.isCompleted()) {
            this.gameStateComponent.stopTimer();
        }
        this.frameComponent.unlockInteraction();
        this._showCongratulationIfNeeded();
    }

    move(square, squareComponent) {
        let isGameCompleted = this.gemPuzzle.isCompleted();
        let direction = this.gemPuzzle.getMoveDirection(square);
        if (!direction || isGameCompleted) return;
        this.frameComponent.lockInteraction();
        squareComponent.animateMove(direction);

        setTimeout(() => {
            this.gemPuzzle.move(square);
            let movesCount = this.gemPuzzle.getGameState().movesCount;
            this.gameStateComponent.updateMoves(movesCount);
            this.frameComponent.updateFrame(
                this.gemPuzzle.getFrame().flat(),
                this.gemPuzzle.getSize()
            );
            if (this.gemPuzzle.gameCompleted) {
                this.gameStateComponent.stopTimer();
            }
            this.frameComponent.unlockInteraction();
            this._showCongratulationIfNeeded();
        }, 500);
    }

    _showCongratulationIfNeeded() {
        if (this.gemPuzzle.isCompleted()) {
            let congratulationsComponent = new CongratulationsComponent(
                this.gemPuzzle.getGameState()
            );
            document.body.append(congratulationsComponent.element);
        }
    }
}
