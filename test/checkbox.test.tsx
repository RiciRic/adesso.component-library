import React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxChecked, CheckboxUnchecked, CheckboxCheckedDisabled, CheckboxUncheckedDisabled } from '../stories/Checkbox.stories';

describe('CheckboxChecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckboxChecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('CheckboxUnchecked', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckboxUnchecked />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('CheckboxCheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckboxCheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('CheckboxUncheckedDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckboxUncheckedDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
