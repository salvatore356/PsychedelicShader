import glsl from 'glslify';

const fragmentShader = glsl`

uniform vec2 u_resolution;
uniform float u_time;
varying vec2 vUv;

void  mainImage( out vec4,  vec2 fragCoord );

void main () {
    vec4 outfrag;
    vec2 fragCoord = u_resolution * vUv;
    mainImage(outfrag, fragCoord);
    gl_FragColor = outfrag;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy / u_resolution.xy;
	vec2 pos = (uv.xy-0.5);
	vec2 cir = ((pos.xy*pos.xy+sin(uv.x*18.0+u_time)/25.0*sin(uv.y*7.0+u_time*1.5)/1.0)+uv.x*sin(u_time)/16.0+uv.y*sin(u_time*1.2)/16.0);
	float circles = (sqrt(abs(cir.x+cir.y*0.5)*25.0)*5.0);
	fragColor = vec4(sin(circles*1.25+2.0),abs(sin(circles*1.0-1.0)-sin(circles)),abs(sin(circles)*1.0),1.0);
}
`

export default fragmentShader