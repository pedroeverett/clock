import { observer } from 'mobx-react';
import React from 'react';
import { AnalogClock } from './AnalogClock';
import { AppState } from './AppState';
import { Clock } from './Clock';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  // create different states for each clock
  public render() {
    return (
      <div className='clocks'>
        <Clock appState={this.appState} />
        <AnalogClock appState={this.appState} />
      </div>
    );
  }
}
