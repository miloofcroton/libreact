import {Component, createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {LocationSensor} from '.';
import ShowDocs from '../../.storybook/ShowDocs'

class StoryLocationSensroExample extends Component<any, any> {
  state = {
    url: 'page.html',
    state: 'STATE'
  };

  render () {
    return (
      <div>
        <input value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} />
        <input value={this.state.state} onChange={(e) => this.setState({state: e.target.value})} />
        <button onClick={() => {
          history.pushState(this.state.state, '', this.state.url);
        }}>Push state</button>

        <br />

        <button onClick={() => history.go(-1)}>history.back()</button>
        <button onClick={() => history.go(1)}>history.forward()</button>

        <LocationSensor>{(state) =>
          <pre style={{fontFamily: 'monospace'}}>
            {JSON.stringify(state, null, 4)}
          </pre>
        }</LocationSensor>
      </div>
    );
  }
}

storiesOf('Sensors/LocationSensor', module)
  .add('Documentation', () => h(ShowDocs, {name: 'BatterySensor'}))
  .add('Example', () => h(StoryLocationSensroExample));
