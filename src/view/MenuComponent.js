export class MenuComponent {
    constructor(menuController) {
        this.menuController = menuController;
        this.element = document.createElement("div");
        this.element.classList.add("menu");
        this.soundState = true;

        this._render();
        this._addListeners();
    }

    _render() {
        this.buttonWrapper = document.createElement("dev");
        this.buttonWrapper.classList.add("button-wrapper");

        this.startButton = document.createElement("button");
        this.startButton.innerText = `Shuffle and start`;
        this.buttonWrapper.append(this.startButton);

        this.saveButton = document.createElement("button");
        this.saveButton.innerText = `Save`;
        this.buttonWrapper.append(this.saveButton);

        this.loadButton = document.createElement("button");
        this.loadButton.innerText = `Load`;
        this.buttonWrapper.append(this.loadButton);

        this.showResultsButton = document.createElement("button");
        this.showResultsButton.innerText = `Show results`;
        this.buttonWrapper.append(this.showResultsButton);
        this.element.append(this.buttonWrapper);

        this._renderSelect();
        this._renderSoundButtons();
    }

    _renderSoundButtons() {
        let soundWrapper = document.createElement("div");
        soundWrapper.classList.add("sound-wrapper");

        let soundButtonOnWrapper = document.createElement("div");
        soundButtonOnWrapper.classList.add("sound-button-on-wrapper");
        this.soundButtonOn = document.createElement("input");
        this.soundButtonOn.type = "radio";
        this.soundButtonOn.checked = "true";
        this.soundButtonOnLabel = document.createElement("label");
        this.soundButtonOnSpan = document.createElement("span");
        this.soundButtonOnSpan.innerText = `Sound On`;

        let soundButtonOffWrapper = document.createElement("div");
        soundButtonOffWrapper.classList.add("sound-button-off-wrapper");
        this.soundButtonOff = document.createElement("input");
        this.soundButtonOff.type = "radio";
        this.soundButtonOff.checked = null;
        this.soundButtonOffLabel = document.createElement("label");
        this.soundButtonOffSpan = document.createElement("span");
        this.soundButtonOffSpan.innerText = `Sound Off`;

        soundButtonOnWrapper.append(
            this.soundButtonOn,
            this.soundButtonOnLabel,
            this.soundButtonOnSpan
        );

        soundButtonOffWrapper.append(
            this.soundButtonOff,
            this.soundButtonOffLabel,
            this.soundButtonOffSpan
        );

        soundWrapper.append(soundButtonOnWrapper, soundButtonOffWrapper);
        this.element.append(soundWrapper);
    }

    _turnSoundOn() {
        this.soundButtonOn.checked = "true";
        this.soundButtonOff.checked = null;
        this.soundState = true;
    }

    _turnSoundOff() {
        this.soundButtonOn.checked = null;
        this.soundButtonOff.checked = "true";
        this.soundState = false;
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
        let optionFive = document.createElement("option");
        optionFive.innerText = `5x5`;
        optionFive.value = 5;
        let optionSix = document.createElement("option");
        optionSix.innerText = `6x6`;
        optionSix.value = 6;
        let optionSeven = document.createElement("option");
        optionSeven.innerText = `7x7`;
        optionSeven.value = 7;
        let optionEight = document.createElement("option");
        optionEight.innerText = `8x8`;
        optionEight.value = 8;
        this.sizeSelect.append(
            optionTwo,
            optionTree,
            optionFour,
            optionFive,
            optionSix,
            optionSeven,
            optionEight
        );
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

        this.soundButtonOn.addEventListener("change", (event) => {
            this._turnSoundOn();
            this.menuController.toggleSound(this.soundState);
        });

        this.soundButtonOff.addEventListener("change", (event) => {
            this._turnSoundOff();
            this.menuController.toggleSound(this.soundState);
        });
    }
}
