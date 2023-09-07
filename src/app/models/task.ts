export class Task {
  text: string = '';
  state: boolean = false;

  constructor(text: string) {
    this.text = text;
  }
}
