import React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ColoredLogo,
  UnicolorDefaultLogo,
  UnicolorLogo,
  ColoredIcon,
  UnicolorDefaultIcon,
  UnicolorIcon,
} from '../stories/AdessoLogo.stories';

describe('ColoredLogo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ColoredLogo {...ColoredLogo.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('UnicolorDefaultLogo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnicolorDefaultLogo {...UnicolorDefaultLogo.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('UnicolorLogo', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnicolorLogo {...UnicolorLogo.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('ColoredIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ColoredIcon {...ColoredIcon.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('UnicolorDefaultIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnicolorDefaultIcon {...UnicolorDefaultIcon.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('UnicolorIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UnicolorIcon {...UnicolorIcon.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
