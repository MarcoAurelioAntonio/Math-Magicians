import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Check tha Quote function renders content', () => {
  it('Check if render the Quote', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
