export class SoundComponent {
    constructor() {
        this.audioElementMove = new Audio(
            "https://zvukogram.com/mp3/cats/2712/zvuk-najatiya-na-knopku.mp3"
        );
        this.audioElementError = new Audio(
            "https://zvukogram.com/mp3/cats/2607/zvuk9.mp3"
        );
    }

    playSuccess() {
        this.audioElementMove.play();
    }

    playError() {
        this.audioElementError.play();
    }
}
