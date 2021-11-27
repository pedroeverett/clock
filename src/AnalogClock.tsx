import React from 'react';
import { observer } from 'mobx-react';

import { AppState } from './AppState';

import './analogclock.scss';

interface AnalogClockProps {
  appState: AppState;
}

@observer
export class AnalogClock extends React.Component<AnalogClockProps> {
  private intervalID: number;
  constructor(props: AnalogClockProps) {
    super(props);
    this.updateClock();
  }

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  public render() {
    const { hour, minute, second } = this.props.appState;
    return (
      <div className='analog-clock-body'>
        <div className='analog-clock'>
          <div className='analog-clock-wrap'>
            <span className='analog-clock-hour' style={{ transform: `rotate(${hour}deg)` }}></span>
            <span
              className='analog-clock-minute'
              style={{ transform: `rotate(${minute}deg)` }}
            ></span>
            <span
              className='analog-clock-second'
              style={{ transform: `rotate(${second}deg)` }}
            ></span>
            <span className='analog-clock-dot'></span>
          </div>
        </div>
      </div>
    );
  }

  private updateClock() {
    const date = new Date();
    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    this.props.appState.setAnalogClockTime(hour, minute, second);
  }
}
