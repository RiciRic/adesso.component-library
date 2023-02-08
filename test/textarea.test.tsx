import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultTextArea } from '../stories/TextArea.stories';

describe('DefaultTextArea', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultTextArea />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
