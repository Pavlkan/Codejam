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
        let resultsList = statistics.reduce((results, result, index) => {
            return (
                results +
                `${index + 1}. Moves:${result.movesCount}, Time: ${
                    result.time / 1000
                } seconds \n`
            );
        }, "");
        statisticsField.innerText = `
            Top 10 results based on moves
            ${resultsList}
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
