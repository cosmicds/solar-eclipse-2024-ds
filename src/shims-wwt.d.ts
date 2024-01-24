import { Color, RenderContext } from "@wwtelescope/engine";

declare module "@wwtelescope/engine" {
  export class Grids {
    static drawAltAzGrid(renderContext: RenderContext, opacity: number, drawColor: Color): void;
    static _makeAltAzGridText(): void;
    static _altAzTextBatch: Text3dBatch | null;
  }

  export class Text3dBatch {
    constructor(height: number);
  }

  export class Text3d {
    constructor(center: boolean, up: boolean, text: string, fontsize: number, scale: number);
  }

  export class Vector3d {
    static create(x: number, y: number, z: number): Vector3d;
  }

  export class Texture {
    static fromUrl(url: string): Texture;
  }

  export class PushPin {
    static getPushPinTexture(pinId: number): Texture;
  }

  export class Tile {
    static tilesInView: number;
    static tilesTouched: number;
    static deepestLevel: number;
  }

  export class TileCache {
    static getTile(): Tile;
  }

  export class RenderTriangle {}

  export class Planets {
    static _planetTextures: Texture[];

    // Technically this is a list of AstroRaDec objects, but this is a good enough definition
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static _planetLocations: { RA: number; dec: number }[];
    static _planetDiameters: number[];
  }

  export class CAAMoon {
    static radiusVector(JD: number): number;
  }
  
  export class CAAEarth {
    static radiusVector(JD: number): number;
  }
  
  export class Coordinates {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get_lat(): number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get_lng(): number;
  }
  
  export class SpaceTimeController {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static get_location(): Coordinates;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static get_altitude(): number;
  }
  
  export class AstroCalc {  
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static getPlanet(jd: number, planet: number, lat: number, lon: number, alt: number, threeDee: boolean): { RA: number; dec: number, distance: number };
  }
}