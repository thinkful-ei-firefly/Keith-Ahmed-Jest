import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);

    //clean up
    ReactDOM.unmountComponentAtNode(div); 
  });
});

describe('<Card />', () => {
  it('Renders this UI as expected', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

