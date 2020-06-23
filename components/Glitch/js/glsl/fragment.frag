precision mediump float;

varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;

void main() {
  float wave = vWave * 0.25;
  vec3 texture = texture2D(uTexture, vUv + wave).rgb;
  gl_FragColor = vec4(texture, 1.);
}