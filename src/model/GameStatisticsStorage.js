export class GameStatisticsStorage {
    constructor() {}

    addGameResult(gameState) {
        let gameStatisticsRecord = {
            movesCount: gameState.movesCount,
            time: gameState.getSpentTime(),
        };
        let statistics = this.getStatistics();
        statistics.push(gameStatisticsRecord);
        localStorage.setItem("statistics", JSON.stringify(statistics));
    }

    getStatistics() {
        let statistics = localStorage.getItem("statistics");
        return statistics ? JSON.parse(statistics) : [];
    }
}
