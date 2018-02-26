import * as React from 'react';
import { shallow } from 'enzyme';
import { Container as OriginalPlayDetails, playerDetails, mapSizesToProps } from './Container';
import { Component } from './Component'
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

const setup = () => {
	const deviceSizeType = 'SMALL';
	const wrapper = shallow(<OriginalPlayDetails deviceSizeType={deviceSizeType}></OriginalPlayDetails>);

	return {
		playerDetails,
		deviceSizeType,
		wrapper
	};
};

describe('PlayerDetails container', () => {
	it('should render component', () => {
		const { wrapper } = setup();
		expect(wrapper.find(Component)).toHaveLength(1);
	});

	it('should pass props', () => {
		const { playerDetails, deviceSizeType, wrapper } = setup();
		expect(wrapper.props()).toEqual({ ...playerDetails, deviceSizeType });
	});

	describe('mapSizesToProps', () => {
		it('should be SMALL', () => {
			expect(mapSizesToProps({ width: 414 })).toEqual({ deviceSizeType: SMALL });
		});

		it('should be MEDIUM', () => {
			expect(mapSizesToProps({ width: 768 })).toEqual({ deviceSizeType: MEDIUM });
		});

		it('should be LARGE', () => {
			expect(mapSizesToProps({ width: 769 })).toEqual({ deviceSizeType: LARGE });
		});
	});
});
