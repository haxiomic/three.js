import { Color } from '../math/Color';
import { IFog } from './Fog';
import { Texture } from '../textures/Texture';
/**
 * This class contains the parameters that define linear fog, i.e., that grows exponentially denser with the distance.
 */
export class FogEnvironment implements IFog {

	constructor( hex: number | string, density: number, texture: Texture );

	name: string;
	color: Color;

	/**
	 * Defines how fast the fog will grow dense.
	 * Default is 0.00025.
	 */
	density: number;
	texture: Texture;

	readonly isFogEnvironment: true;

	clone(): this;
	toJSON(): any;

}
