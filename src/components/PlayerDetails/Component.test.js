import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './Component';
import { Player } from '../Player';
import { Indicators } from '../Indicators';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

const setup = (deviceSizeType) => {
	const props = {
		deviceSizeType,
		player: {},
		playerAverage: {},
		playerTotal: {},
		playerBestOfSeason: {}
	}

	const wrapper = shallow(<Component
		{...props}
	></Component>);

	return {
		props, wrapper
	};
};

describe('PlayerDetails component', () => {
	it('should render Player', () => {
		const { wrapper } = setup(SMALL);
		expect(wrapper.find(Player)).toHaveLength(1);
	});

	it('should render Indicators', () => {
		const { wrapper } = setup(SMALL);
		expect(wrapper.find(Indicators)).toHaveLength(2);
	});

	it('should render Indicators', () => {
		const { wrapper } = setup(MEDIUM);
		expect(wrapper.find(Indicators)).toHaveLength(2);
	});

	it('should render Indicators', () => {
		const { wrapper } = setup(LARGE);
		expect(wrapper.find(Indicators)).toHaveLength(2);
	});
});
