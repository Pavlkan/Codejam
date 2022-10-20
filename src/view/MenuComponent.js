export class MenuComponent {
    constructor(menuController) {
        this.menuController = menuController;
        this.element = document.createElement("div");
        this.element.classList.add("menu");
        this.startButton = null;

        this._render();
        this._addListeners();
    }

    _render() {
        this.startButton = document.createElement("button");
        this.startButton.innerText = `Shuffle and start`;
        this.element.append(this.startButton);
    }

    _addListeners() {
        this.startButton.addEventListener("click", () => {
            this.menuController.shuffleAndStart();
        });
    }
}
