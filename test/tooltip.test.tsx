import React from 'react';
import * as ReactDOM from 'react-dom';
import { DeflautTooltip } from '../stories/ToolTip.stories';

describe('DeflautTooltip', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeflautTooltip />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});