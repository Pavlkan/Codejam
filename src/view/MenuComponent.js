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

        this._renderSelect();
    }

    _renderSelect() {
        let selectWrapper = document.createElement("div");
        selectWrapper.classList.add("select-wrapper");
        let selectTitle = document.createElement("span");
        selectTitle.innerText = `select size: `;

        this.sizeSelect = document.createElement("select");
        this.sizeSelect.classList.add("selectSize");
        selectWrapper.append(selectTitle, this.sizeSelect);
        this.element.append(selectWrapper);

        let optionTwo = document.createElement("option");
        optionTwo.innerText = `2x2`;
        optionTwo.value = 2;
        let optionTree = document.createElement("option");
        optionTree.innerText = `3x3`;
        optionTree.value = 3;
        optionTree.selected = "true";
        let optionFour = document.createElement("option");
        optionFour.innerText = `4x4`;
        optionFour.value = 4;
        this.sizeSelect.append(optionTwo, optionTree, optionFour);
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

        this.showResultsButton.addEventListener("click", () => {
            this.menuController.showResults();
        });

        this.sizeSelect.addEventListener("change", (event) => {
            let size = Number(event.target.value);
            this.menuController.changeSize(size);
        });
    }
}
