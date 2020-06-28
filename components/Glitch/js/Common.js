
import * as THREE from "three";
import img from "./assets/bg2.png";
import vertexShader from "./glsl/vertex.vert";
import vertexShaderSp from "./glsl/vertex_sp.vert";
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
    
        // レンダラーを作成
        this.renderer = new THREE.WebGLRenderer({
          canvas: $canvas
        });
        this.renderer.setSize(this.size.windowW, this.size.windowH);// 描画サイズ
        this.renderer.setClearColor(0xEAF2F5);
        this.renderer.setPixelRatio(window.devicePixelRatio);// ピクセル比
    
        // カメラを作成（背景シェーダーだけならパースいらないので、OrthographicCameraをつかう）
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);
    
        // シーンを作成
        this.scene = new THREE.Scene();
    
        // 平面をつくる（幅, 高さ, 横分割数, 縦分割数）
        this.geo = new  THREE.PlaneGeometry(2, 2, 1, 1);
        // const geo = new PlaneGeometry(2, 2, 1, 1);
    
        // マウス座標
        this.mouse = new  THREE.Vector2(0.5, 0.5);
        this.targetPercent = 0.0;
    
        this.texture = new THREE.TextureLoader().load(img)// テクスチャ読み込み

        if(this.size.windowW > this.size.windowH){
          this.uniforms = {
            uAspect: {
              value: this.size.windowH / this.size.windowW
            },
            uTime: {
              value: 0.0
            },
            uMouse: {
              value: new THREE.Vector2(0.5, 0.5)
            },
            uPercent: {
              value: this.targetPercent
            },
            uFixAspect: {
              value: this.size.windowH / this.size.windowW
            },
            uTex: {
              value: this.texture
            }
          };  
          this.mat = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader
          });
        }else{
          this.uniforms = {
            uAspect: {
              value: this.size.windowW / this.size.windowH
            },
            uTime: {
              value: 0.0
            },
            uMouse: {
              value: new THREE.Vector2(0.5, 0.5)
            },
            uPercent: {
              value: this.targetPercent
            },
            uFixAspect: {
              value: this.size.windowW / this.size.windowH
            },
            uTex: {
              value: this.texture
            }
          }; 
          this.mat = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShaderSp,
            fragmentShader: fragmentShader
          }); 
        }
    
        // uniform変数を定義
        
        // uniform変数とシェーダーソースを渡してマテリアルを作成
        
    
        this.mesh = new  THREE.Mesh(this.geo, this.mat);
    
        // メッシュをシーンに追加
        this.scene.add(this.mesh);
    
         // 描画ループ開始
        this.render();
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

        // this.material.uniforms.uTime.value = this.clock.getElapsedTime();

        // this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => { this.render(); });

        // ミリ秒から秒に変換
        const sec = performance.now() / 1000;

        // シェーダーに渡す時間を更新
        this.uniforms.uTime.value = sec;

        // シェーダーに渡すマウスを更新
        this.uniforms.uMouse.value.lerp(this.mouse, 0.2);

        // シェーダーに渡す進捗度を更新
        this.uniforms.uPercent.value += (this.targetPercent - this.uniforms.uPercent.value) * 0.1;

        // 画面に表示
        this.renderer.render(this.scene, this.camera);
    }
}

export default new Common();