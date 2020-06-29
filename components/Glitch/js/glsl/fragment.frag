varying vec2 vUv;

uniform float uTime;
uniform float uPercent;
uniform sampler2D uTex;

void main() {
  vec2 uv = vUv;

  float t = uTime * 6.;
  float amount = uPercent * 0.005;

  vec2 uvOffset = vec2( cos( uv.y * 20. + t ), sin( uv.x * 10. - t ) ) * amount;

  vec3 color = texture2D( uTex, uv + uvOffset ).rgb;

  gl_FragColor = vec4( color, 1.0 );
}