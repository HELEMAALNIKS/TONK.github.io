export class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 1800, 450, "tonk");
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(0.2);
        this.setDragX(600);
        this.update;
    }
    walkleft() {
        this.setVelocityX(-1000);
    }
    walkright() {
        this.setVelocityX(1000);
    }
    update() {
    }
}
