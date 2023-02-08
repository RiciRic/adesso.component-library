import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultTextField, IconBothSides, IconLeftTextField, IconRightTextField } from '../stories/TextField.stories';

describe('DefaultTextField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultTextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('IconBothSides', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconBothSides />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('IconLeftTextField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconLeftTextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('IconRightTextField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IconRightTextField />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
