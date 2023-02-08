import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultCard } from '../stories/Card.stories';

describe('DefaultCard', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
