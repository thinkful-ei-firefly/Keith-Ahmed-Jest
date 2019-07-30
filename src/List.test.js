import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('<List />', () => {
  it ('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < List header = {'something'}
      cards = {[1, 2, 3]} key = {'5'} / > , div);

    //clean up
    ReactDOM.unmountComponentAtNode(div); 
  });
});

describe('<List />', () => {
  it('Renders this UI as expected', () => {
    const tree = renderer.create(< List header = {'something'}
      cards = {[1, 2, 3]} key = {'5'} / >).toJSON();
    expect(tree).toMatchSnapshot();
  });
});