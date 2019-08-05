export class Team {
  name: string;
  score = 0;
  sugar = 10.0;
  congrats = false;

  constructor(name: string) {
    this.name = name;
  }
}
