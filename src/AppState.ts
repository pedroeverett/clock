import { action, observable } from 'mobx';

export class AppState {
  @observable public time: string;

  @action public setTime(time: string) {
    this.time = time;
  }

  public getTime() {
    return this.time;
  }
}
