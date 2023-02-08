import React from 'react';
import * as ReactDOM from 'react-dom';
import { SwitchChecked, SwitchUnchecked, SwitchCheckedDisabled, SwitchUncheckedDisabled } from '../stories/Switch.stories';

describe('SwitchChecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwitchChecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('SwitchUnchecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwitchUnchecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('SwitchCheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwitchCheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('SwitchUncheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SwitchUncheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
