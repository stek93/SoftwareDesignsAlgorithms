import { Point } from "./Point";

class InvalidShapeError extends Error {
  constructor(msg: string) {
    super(msg);
  }
}
export abstract class Shape {
  private static DEFAULT_COLOR = "green";
  private static DEFAULT_FILLED = true;
  private static MIN_SHAPE_POINTS = 3;

  constructor(points: Point[]);
  constructor(points: Point[], color: string, filled: boolean);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(
    protected points: Point[],
    protected color: string = Shape.DEFAULT_COLOR,
    protected filled: boolean = Shape.DEFAULT_FILLED
  ) {
    this.postInit();
  }

  protected postInit() {
    if (this.points.length < Shape.MIN_SHAPE_POINTS)
      throw new InvalidShapeError(
        `Shape consists of minimum ${Shape.MIN_SHAPE_POINTS} points`
      );
  }

  abstract getType(): string;

  public getPerimeter(): number {
    let perimeter = 0;

    for (let i = 0; i < this.points.length; i++) {
      if (i === this.points.length - 1) {
        perimeter += this.points[0].distance(this.points[i]);
        break;
      }

      perimeter += this.points[i].distance(this.points[i + 1]);
    }

    return perimeter;
  }

  public toString(): string {
    const points = this.points.map((pt) => pt.toString()).join(", ");
    return `A Shape with color of ${this.color} and ${
      this.filled ? "filled" : "not filled"
    }. Points: ${points}.`;
  }
}
