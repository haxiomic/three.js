export default /* glsl */`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
		gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

	#elif defined(FOG_ENVIRONMENT)

		vec3 fogSample = texture2D(fogTexture, gl_FragCoord.xy * invViewportSize).rgb;
		gl_FragColor.rgb = mix( fogSample, gl_FragColor.rgb, exp( - fogDensity * fogDepth * fogDepth ) );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
		gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

	#endif

#endif
`;
