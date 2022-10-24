import { CongratulationsComponent } from "../view/CongratulationsComponent.js";
import { AutoCloser } from "../view/drag-n-drop/AutoCloser.js";
import { DnD } from "../view/drag-n-drop/DnD.js";

export class FrameController {
    constructor(gemPuzzle, frameComponent, gameStateComponent, soundComponent) {
        this.gemPuzzle = gemPuzzle;
        this.frameComponent = frameComponent;
        this.gameStateComponent = gameStateComponent;
        let movesCount = this.gemPuzzle.getGameState().movesCount;
        this.gameStateComponent.updateMoves(movesCount);
        this.dnd = new DnD();
        this.autoCloser = new AutoCloser();
        this.soundComponent = soundComponent;
        this.soundState = true;
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
        let isCompletedMove = this.autoCloser.completeMove(
            [x, y],
            context,
            direction
        );
        this.frameComponent.lockInteraction();
        if (this.soundState && isCompletedMove) {
            this._turnMoveSoundOn();
        }
        setTimeout(() => {
            if (isCompletedMove) this.gemPuzzle.move(context.element.square);
            this._updateView();
        }, 300);
    }

    rollBackDrag(context) {
        let isGameCompleted = this.gemPuzzle.isCompleted();
        let direction = this.gemPuzzle.getMoveDirection(context.element.square);
        if (!direction || isGameCompleted) return;
        this.frameComponent.lockInteraction();
        this.autoCloser.rollBackMove(context, direction);
        setTimeout(() => {
            this.frameComponent.unlockInteraction();
        }, 500);
    }

    move(square, squareComponent) {
        let isGameCompleted = this.gemPuzzle.isCompleted();
        let direction = this.gemPuzzle.getMoveDirection(square);
        if (!direction || isGameCompleted) {
            this._turnErrorSoundOn();
            return;
        }
        this.frameComponent.lockInteraction();
        squareComponent.animateMove(direction);
        if (this.soundState) {
            this._turnMoveSoundOn();
        }
        setTimeout(() => {
            this.gemPuzzle.move(square);
            this._updateView();
        }, 500);
    }

    setSoundState(soundState) {
        this.soundState = soundState;
    }

    _turnMoveSoundOn() {
        this.soundComponent.audioElementMove.play();
    }

    _turnErrorSoundOn() {
        this.soundComponent.audioElementError.play();
    }

    _updateView() {
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
