import React from 'react';
import renderer from 'react-test-renderer';
import WeatherButton from 'components/atoms/WeatherButton';

const mock = jest.fn();
const defaultProps = {
  text: 'test',
  CTA: mock,
}

// no need for functional test of the size of the component and the class
test('weather button renders correctly with default props', () => {
  const component = renderer.create(
    <WeatherButton {...defaultProps} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onClick();
  expect(mock).toHaveBeenCalled();
})