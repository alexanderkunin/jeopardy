export class Question {
  body: string;
  answer: string;
  points: number;
  activated: boolean;
  color: string;

  constructor(
    body: string,
    answer: string,
    points: number,
    color: string,
    activated: boolean
  ) {
    this.body = body;
    this.answer = answer;
    this.points = points;
    this.color = color;
    this.activated = activated;
  }
}
