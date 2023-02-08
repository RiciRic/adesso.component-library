import React from 'react';
import * as ReactDOM from 'react-dom';
import { H1, H2, H3, H4, H5, H6, Subtitle1, Subtitle2, Body1, Body2 } from '../stories/Typography.stories';

describe('H1', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('H2', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('H3', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H3 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('H4', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H4 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('H5', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H5 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('H6', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<H6 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Subtitle1', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subtitle1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Subtitle2', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subtitle2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Body1', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Body2', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Body2 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
