import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './Component';
import { PlayerDetails } from '../PlayerDetails'
const setup = () => {
  const wrapper = shallow(<Component />);
  return {
    wrapper
  };
};

describe('App', () => {
  it('render component', () => {
    const { wrapper } = setup();
    expect(wrapper.find(PlayerDetails)).toHaveLength(1);
  });

});
