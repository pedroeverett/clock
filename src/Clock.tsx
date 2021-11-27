import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from './AppState';

import './clock.scss';

interface ClockProps {
  appState: AppState;
}

@observer
export class Clock extends React.Component<ClockProps> {
  private intervalID: number;
  constructor(props: ClockProps) {
    super(props);
    this.props.appState.setTime(new Date().toLocaleTimeString());
  }

  componentDidMount() {
    this.intervalID = window.setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  public render() {
    const { appState } = this.props;
    return (
      <div className='clock-body'>
        <div className='clock-time'>
          <p>{appState.getTime()}</p>
        </div>
      </div>
    );
  }

  private updateClock() {
    this.props.appState.setTime(new Date().toLocaleTimeString());
  }
}
