import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Check if Calculator is rendering', () => {
  test('Renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});