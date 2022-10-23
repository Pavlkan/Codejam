export class MenuComponent {
    constructor(menuController) {
        this.menuController = menuController;
        this.element = document.createElement("div");
        this.element.classList.add("menu");

        this._render();
        this._addListeners();
    }

    _render() {
        this.startButton = document.createElement("button");
        this.startButton.innerText = `Shuffle and start`;
        this.element.append(this.startButton);

        this.saveButton = document.createElement("button");
        this.saveButton.innerText = `Save`;
        this.element.append(this.saveButton);

        this.loadButton = document.createElement("button");
        this.loadButton.innerText = `Load`;
        this.element.append(this.loadButton);

        this.showResultsButton = document.createElement("button");
        this.showResultsButton.innerText = `Show results`;
        this.element.append(this.showResultsButton);
    }

    _addListeners() {
        this.startButton.addEventListener("click", () => {
            this.menuController.shuffleAndStart();
        });

        this.saveButton.addEventListener("click", () => {
            this.menuController.save();
        });

        this.loadButton.addEventListener("click", () => {
            this.menuController.loadAndStart();
        });

        this.showResultsButton.addEventListener('click', () => {
            this.menuController.showResults();
        })
    }
}
