import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './Component';

const setup = () => {
	const props = {
		name: 'a1',
		value: 11
	}
	const wrapper = shallow(<Component
		{...props}
	></Component>);

	return {
		props, wrapper
	};
};

describe('Indicator component', () => {
	it('should render name', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.name.toUpperCase());
	});

	it('should render value', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.value);
	});


});
