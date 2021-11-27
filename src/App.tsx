import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { Clock } from './Clock';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className='App'>
        <Clock appState={this.appState} />
      </div>
    );
  }
}
