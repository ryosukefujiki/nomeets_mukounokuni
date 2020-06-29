import Common from "./Common";

export default class ArtworkGL{
    constructor(props){
        this.props = props;
        this.init();
    }
    init(){
        Common.init(this.props.$canvas);
        // this.shape = new Shape();
        window.addEventListener("resize", this.resize.bind(this));
        // this.loop();
        window.addEventListener('mousemove', e => {
            Common.mouseMoved(e.clientX, e.clientY);
        });
        window.addEventListener('mousedown', e => {
            Common.mousePressed(e.clientX, e.clientY);
        });
        window.addEventListener('mouseup', e => {
            Common.mouseReleased(e.clientX, e.clientY);
        });
        
    }

    resize(){
        Common.resize();
    }

    loop(){
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }

    render(){
        // this.shape.update();
        Common.render();
    }
}