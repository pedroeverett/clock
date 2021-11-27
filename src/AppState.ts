import { action, observable } from 'mobx';

export class AppState {
  @observable public time: string;
  @observable public hour: number;
  @observable public minute: number;
  @observable public second: number;

  @action public setTime(time: string) {
    this.time = time;
  }

  @action public setAnalogClockTime(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  public getTime() {
    return this.time;
  }
}
