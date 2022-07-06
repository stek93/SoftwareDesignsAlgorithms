type Tuple = [any, any];
export class Point {
  constructor();
  constructor(x: number, y: number);
  constructor(private readonly x: number = 0, private readonly y: number = 0) {}

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }

  private calculateDistance(p1: Tuple, p2: Tuple) {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  public distance(): number;
  public distance(x1: number, y1: number): number;
  public distance(other: Point): number;
  public distance(param1?: number | Point, param2?: number): number {
    let targetPoint: Tuple;
    if (param1 instanceof Point) {
      const { x, y } = param1;
      targetPoint = [x, y];
    } else if (typeof param1 === "number" && typeof param2 === "number") {
      targetPoint = [param1, param2];
    } else {
      targetPoint = [0, 0];
    }

    return this.calculateDistance(targetPoint, [this.x, this.y]);
  }
}
