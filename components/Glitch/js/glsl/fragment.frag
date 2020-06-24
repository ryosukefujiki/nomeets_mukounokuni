varying vec2 vUv;

uniform sampler2D uTex;

void main() {
  vec3 color = texture2D( uTex, vUv ).rgb;

  gl_FragColor = vec4( color, 1.0 );
}