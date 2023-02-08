import React from 'react';
import * as ReactDOM from 'react-dom';
import { SliderDefault, SliderDisabled } from '../stories/Slider.stories';

describe('SliderDefault', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SliderDefault />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('SliderDisabled', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SliderDisabled />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
