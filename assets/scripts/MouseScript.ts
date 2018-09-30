const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad() {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event : cc.Event.EventMouse) => {
            console.log("Mouse down on top of selected node");
            event.bubbles = false;
        });

        this.node.on(cc.Node.EventType.MOUSE_LEAVE, (event : cc.Event.EventMouse) =>{
            console.log("mouse no longer over" + event.currentTarget.name);
        });

        this.node.getParent().on(cc.Node.EventType.MOUSE_DOWN, ( event: cc.Event.EventMouse) => { 
            console.log("Mouse button presed on parent. Button: "+ event.getButton());
        });
    }
}
