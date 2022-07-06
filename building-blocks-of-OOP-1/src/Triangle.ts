import { Point } from "./Point";
import { Shape } from "./Shape";

export class Triangle extends Shape {
  constructor(v1: Point, v2: Point, v3: Point);
  constructor(
    v1: Point,
    v2: Point,
    v3: Point,
    color?: string,
    filled?: boolean
  );
  constructor(
    v1: Point,
    v2: Point,
    v3: Point,
    color?: string,
    filled?: boolean
  ) {
    super([v1, v2, v3], color, filled);
  }

  getType(): string {
    const side1 = this.points[0].distance(this.points[1]).toFixed(2);
    const side2 = this.points[1].distance(this.points[2]).toFixed(2);
    const side3 = this.points[2].distance(this.points[0]).toFixed(2);

    if (side1 != side2 && side2 != side3 && side3 != side1) {
      return "scalene triangle";
    } else if (side1 == side2 && side2 == side3 && side3 == side1) {
      return "equilateral triangle";
    } else {
      return "isosceles triangle";
    }
  }

  public toString(): string {
    return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
  }
}
