export class SoundComponent {
    constructor() {
        this.audioElementMove = document.createElement("video");
        this.audioElementMoveSource = document.createElement("source");
        this.audioElementMoveSource.src = `../../move.mp3`;
        this.audioElementMove.append(this.audioElementMoveSource);
        this.audioElementMove.style.display = `none`;

        this.audioElementError = document.createElement("video");
        this.audioElementErrorSource = document.createElement("source");
        this.audioElementErrorSource.src = `../../error.mp3`;
        this.audioElementError.append(this.audioElementErrorSource);
        this.audioElementError.style.display = `none`;
    }
}
