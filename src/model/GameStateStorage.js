export class GameStateStorage {
    constructor() {}

    save(state, frame) {
        let savedGame = {
            state: this._prepareState(state),
            frame: this._prepareFrame(frame),
        };
        localStorage.setItem("savedGame", JSON.stringify(savedGame));
    }

    load() {
        let rawSavedGame = localStorage.getItem("savedGame");
        return rawSavedGame ? JSON.parse(rawSavedGame) : null;
    }

    _prepareState(state) {
        let timeSpan = Date.now() - state.startTime;
        return { timeSpan, movesCount: state.movesCount };
    }

    _prepareFrame(frame) {
        let grid = frame.grid.flat().map((square) => square.number);
        return { grid, size: frame.size };
    }
}
