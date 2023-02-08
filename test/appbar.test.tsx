import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultHeader, PrimaryHeader, SecondaryHeader } from '../stories/AppBar.stories';

describe('DefaultHeader', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('PrimaryHeader', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PrimaryHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('SecondaryHeader', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SecondaryHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
