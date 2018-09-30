const { ccclass, property } = cc._decorator;

@ccclass
export default class Mover extends cc.Component {
    @property
    speed : number  = 100;

    update(dt) {
        this.node.x -= this.speed * dt;
        if (this.node.x < -(this.node.getParent().width / 2 + this.node.width / 2) )
            this.node.x = this.node.getParent().width / 2 + this.node.width / 2;
    }
}
