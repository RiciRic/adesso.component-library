import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultSelect } from '../stories/Select.stories';

describe('DefaultSelect', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultSelect />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
