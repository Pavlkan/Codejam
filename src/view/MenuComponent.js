export class MenuComponent {
    constructor() {
        this.element = document.createElement("div");
        this.element.classList.add("menu");
        this._render();
    }

    _render() {
        this.element.innerHTML = `
            <button>Shuffle and start</button>
            <button>Save</button>
            <button>Results</button>
        `;
    }
}
