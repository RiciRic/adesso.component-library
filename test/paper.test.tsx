import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultPaper } from '../stories/Paper.stories';

describe('DefaultPaper', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultPaper />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
