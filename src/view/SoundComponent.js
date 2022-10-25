export class SoundComponent {
    constructor() {
        this.audioElementMove = new Audio("../../move.mp3");
        this.audioElementError = new Audio("../../error.mp3");
    }

    playSuccess() {
        this.audioElementMove.play();
    }

    playError() {
        this.audioElementError.play();
    }
}
