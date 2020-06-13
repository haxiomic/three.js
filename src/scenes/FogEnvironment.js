/**
 * @author mrdoob / http://mrdoob.com/
 * @author alteredq / http://alteredqualia.com/
 */

import { Color } from '../math/Color.js';

function FogEnvironment( color, density, texture ) {

	this.name = '';

	this.color = new Color( color );
	this.density = ( density !== undefined ) ? density : 0.00025;
	this.texture = texture;

}

Object.assign( FogEnvironment.prototype, {

	isFogEnvironment: true,

	clone: function () {

		return new FogEnvironment( this.color, this.density, this.texture );

	},

	toJSON: function ( /* meta */ ) {

		return {
			type: 'FogEnvironment',
			color: this.color.getHex(),
			density: this.density,
			texture: this.texture.toJSON(),
		};

	}

} );

export { FogEnvironment };
