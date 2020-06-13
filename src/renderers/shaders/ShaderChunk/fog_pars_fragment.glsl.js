export default /* glsl */`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float fogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#elif defined(FOG_ENVIRONMENT)

		uniform float fogDensity;
		uniform vec2 invViewportSize;
		uniform sampler2D fogTexture;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`;
