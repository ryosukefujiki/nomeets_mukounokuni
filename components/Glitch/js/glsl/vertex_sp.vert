varying vec2 vUv;

uniform float uFixAspect;

void main() {
  // 余白ができないようにアスペクト補正
  vUv = uv - .5;
  vUv.x *= uFixAspect;
  vUv += .5;

  gl_Position = vec4( position, 1.0 );
}