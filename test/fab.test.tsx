import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultFab } from '../stories/Fab.stories';

describe('DefaultFab', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultFab />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
