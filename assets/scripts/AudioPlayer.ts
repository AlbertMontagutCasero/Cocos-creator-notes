const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioPlayer extends cc.Component {
    @property(cc.AudioClip)
    backgroundSong: cc.AudioClip = null;

    lastAudioID: number = -1;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (event.keyCode == cc.macro.KEY.space) {
                var audio = this.node.getComponent(cc.AudioSource);
                if (audio == undefined) {
                    console.log("undefined audio");
                    return;
                }
                if (this.node.getComponent(cc.AudioSource).isPlaying) {
                    console.log("sound already playing");
                    return;
                }
                console.log("playing Sound");
                audio.play();
            }
        });

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (event.keyCode == cc.macro.KEY.t) {
                cc.audioEngine.play(this.backgroundSong, false, 1);
            }
            cc.audioEngine.setFinishCallback(this.lastAudioID, () => {
                this.lastAudioID = -1;
            });
        });


        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
            if (event.keyCode == cc.macro.KEY.up) {
                if (this.lastAudioID != -1)
                    if (cc.audioEngine.getVolume(this.lastAudioID) < 1)
                        cc.audioEngine.setVolume(this.lastAudioID, cc.audioEngine.getVolume(this.lastAudioID) + 0.1);
            }
            if (event.keyCode == cc.macro.KEY.down) {
                if (this.lastAudioID != -1)
                    if (cc.audioEngine.getVolume(this.lastAudioID) > 0)
                        cc.audioEngine.setVolume(this.lastAudioID, cc.audioEngine.getVolume(this.lastAudioID) - 0.1);
            }
        }, this);
    }

    update(dt){
        if(this.lastAudioID != -1){
            console.log(cc.audioEngine.getCurrentTime(this.lastAudioID));
        }
    }
}
