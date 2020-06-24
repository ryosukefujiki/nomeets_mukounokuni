import * as THREE from "three";
// import img from "./assets/mannequin.jpg";
import img from "./assets/mukounokuni.png";

import vertexShader from "./glsl/vertex.vert";
import fragmentShader from "./glsl/fragment.frag";

class Common{
    constructor(){
        this.scene = null;
        this.camera = null;
        this.renderer = null;

        this.size = {
            windowW: null,
            windowH: null
        };

        this.clock = null;

        this.time = {
            total: null,
            delta: null
        };
    }

    init($canvas){
        this.setSize();
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            45, 
            this.size.windowW / this.size.windowH,
            // 0.1,
            // 100
        );
        // this.camera.position.set(0, 0, 1000);
        // this.camera.lookAt(this.scene.position);
        this.camera.position.z = 1;

        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas
        });

        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        this.renderer.setClearColor(0xEAF2F5);
        this.renderer.setSize(this.size.windowW, this.size.windowH);

        // this.geometry = new THREE.BoxGeometry(400, 600, 400);
        this.height_min = this.size.windowH / 1000
        console.log(this.height_min)

        // this.geometry = new THREE.PlaneGeometry(this.size.windowW, this.size.windowH);
        // this.material = new THREE.MeshNormalMaterial();

        this.texture = new THREE.TextureLoader().load(img);
        this.uniforms = {
            uTime: {
              value: 0.0
            },
            uMouse: {
              value: new THREE.Vector2(0.5, 0.5)
            },
            uRadius: {
              value: this.targetRadius
            },
            uFixAspect: {
              value: this.size.windowW / this.size.windowH// 逆アスペクト
            },
            uTex: {
              value: this.texture// テクスチャ
            }
          };
        this.geometry = new THREE.PlaneGeometry(0.4, 0.6, 32, 32);
        this.material = new THREE.MeshPhongMaterial( { map:new THREE.TextureLoader().load(img) } );
        this.material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: this.uniforms,
            // wireframe: true,
            // side: THREE.DoubleSide
          });

        this.box = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.box);

        // var texture = new THREE.TextureLoader().load(img,
        // (tex) => { // 読み込み完了時
        //     // 縦横比を保って適当にリサイズ
        //     const w = 5;
        //     const h = tex.image.height/(tex.image.width/w);

        //     // 平面
        //     const geometry = new THREE.PlaneGeometry(1, 1);
        //     const material = new THREE.MeshPhongMaterial( { map:texture } );
        //     const plane = new THREE.Mesh( geometry, material );
        //     plane.scale.set(w, h, 1);
        //     this.scene.add( plane );
        // });

        this.clock = new THREE.Clock();
        this.clock.start();
    }

    setSize(){
        this.size = {
            windowW: window.innerWidth,
            windowH: window.innerHeight
        }
    }

    resize(){
        // this.setSize();
        // this.camera.aspect = this.size.windowW / this.size.windowH;
        // this.camera.updateProjectionMatrix();
        // this.renderer.setSize(this.size.windowW, this.size.windowH);
    }

    render(){
        // this.time.delta = this.clock.getDelta();
        // this.time.total += this.delta;

        this.material.uniforms.uTime.value = this.clock.getElapsedTime();

        this.renderer.render(this.scene, this.camera);
    }
}

export default new Common();