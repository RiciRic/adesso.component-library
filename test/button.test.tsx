import React from 'react';
import * as ReactDOM from 'react-dom';
import { ContainedButton, OutlinedButton, TextButton } from '../stories/Button.stories';

describe('ContainedButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContainedButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('OutlinedButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OutlinedButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('TextButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
