import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Check home function', () => {
  it('Home function renders the content', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
