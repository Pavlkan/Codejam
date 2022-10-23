export class ResultsComponent {
    constructor(statistics) {
        this.element = document.createElement("div");
        this.element.classList.add("results-modal");
        this._render(statistics);
        this._addListeners();
    }

    _render(statistics) {
        let statisticsField = document.createElement("div");
        statisticsField.classList.add("results-message");
        statisticsField.innerText = `
            Top 10 results based on moves
            1. Moves:${statistics[0].movesCount}, Time: ${statistics[0].time}
            2. Moves:${statistics[1].movesCount}, Time: ${statistics[1].time}
            3. Moves:${statistics[2].movesCount}, Time: ${statistics[2].time}
            4. Moves:${statistics[3].movesCount}, Time: ${statistics[3].time}
            5. Moves:${statistics[4].movesCount}, Time: ${statistics[4].time}
            6. Moves:${statistics[5].movesCount}, Time: ${statistics[5].time}
            7. Moves:${statistics[6].movesCount}, Time: ${statistics[6].time}
            8. Moves:${statistics[7].movesCount}, Time: ${statistics[7].time}
            9. Moves:${statistics[8].movesCount}, Time: ${statistics[8].time}
            10. Moves:${statistics[9].movesCount}, Time: ${statistics[9].time}
        `;
        this.element.append(statisticsField);

        this.button = document.createElement("button");
        this.button.classList.add("results-button");
        this.button.innerText = `Close`;
        this.element.append(this.button);
    }

    _addListeners() {
        this.button.addEventListener("click", () => {
            this.element.remove();
        });
    }
}
