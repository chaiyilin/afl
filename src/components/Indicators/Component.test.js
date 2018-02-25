import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './Component';
import { Indicator } from '../Indicator';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

const setup = (deviceSizeType) => {
	const props = {
		deviceSizeType,
		disposals: 1,
		handballs: 2,
		kicks: 3,
		tackles: 4,
		marks: 5,
		score: 6,
		title: 7,
		isShowingRed: true
	}
	const wrapper = shallow(<Component
		{...props}
	></Component>);

	return {
		props, wrapper
	};
};

describe('Indicators component', () => {
	it('should render when deviceSizeType is SMALL', () => {
		const { wrapper } = setup(SMALL);
		expect(wrapper.find(Indicator)).toHaveLength(6);
	});

	it('should render when deviceSizeType is MEDIUM', () => {
		const { wrapper } = setup(MEDIUM);
		expect(wrapper.find(Indicator)).toHaveLength(6);
	});

	it('should render when deviceSizeType is LARGE', () => {
		const { wrapper } = setup(LARGE);
		expect(wrapper.find(Indicator)).toHaveLength(5);
	});
});
