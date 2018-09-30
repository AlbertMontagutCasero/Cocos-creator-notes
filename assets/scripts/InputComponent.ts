const { ccclass, property } = cc._decorator;

@ccclass
export default class InputComponent extends cc.Component {
    @property
    baseSpeed : number = 2

    speed: number = this.baseSpeed;

    public keys: Map<number, boolean> = new Map();

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,
            this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,
            this.onKeyUp, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard): any {
        this.keys.set(event.keyCode, true);
        if (this.keys.has(cc.macro.KEY.shift)){
            console.log("Shift pressed");
            this.speed = this.baseSpeed * 2;
            console.log("speed: "+ this.speed);
        }

        switch (event.keyCode) {
            case cc.macro.KEY.w:
                this.node.y += this.speed;
                console.log("W pressed");
                break;
            case cc.macro.KEY.a:
                this.node.x -= this.speed;
                console.log("a pressed");
                break;
            case cc.macro.KEY.d:
                this.node.x += this.speed;
                console.log("d pressed");
                break;
            case cc.macro.KEY.s:
                this.node.y -= this.speed;
                console.log("s pressde");
                break;
        }
    }

    onKeyUp(event: cc.Event.EventKeyboard) {
        if (this.keys.has(cc.macro.KEY.shift)){
            console.log("Shift relesed");
            this.speed = this.baseSpeed;
            console.log("speed: "+ this.speed);
        }

        this.keys.delete(event.keyCode);
    }
}
