export class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: "EndScene" });
    }
    init() {
    }
    preload() {
    }
    create() {
        // change this to a nice game over image
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        // add text here
        // this.add.text(400, 300, 'GAME OVER, MAN!', { fontFamily: 'Arial Black', fontSize: 70, color: '#2ac9be' }).setOrigin(0.5).setStroke('#7df2ea', 16)
        // add code here to switch to the GameScene, after a mouse click
    }
}
