import React from 'react';
import * as ReactDOM from 'react-dom';
import { RadioChecked, RadioUnchecked, RadioCheckedDisabled, RadioUncheckedDisabled } from '../stories/Radio.stories';

describe('RadioChecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioChecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('RadioUnchecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioUnchecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('RadioCheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioCheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('RadioUncheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RadioUncheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
