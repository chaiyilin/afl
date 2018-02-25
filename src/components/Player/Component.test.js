import * as React from 'react';
import { shallow } from 'enzyme';
import { Component } from './Component';

const setup = () => {
	const props = {
		firstName: 'a1',
		lastName: 'b1',
		clubName: 'c1',
		clubLogoUrl: 'd1',
		playPhotoUrl: 'e1',
		jumperNumber: 11
	}
	const wrapper = shallow(<Component
		{...props}
	></Component>);

	return {
		props, wrapper
	};
};

describe('Player component', () => {
	it('should render firstName', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.firstName);
	});

	it('should render lastName', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.lastName);
	});

	it('should render clubName', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.clubName);
	});

	it('should render clubLogoUrl', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.clubLogoUrl);
	});

	it('should render playPhotoUrl', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.playPhotoUrl);
	});

	it('should render jumperNumber', () => {
		const { wrapper, props } = setup();
		expect(wrapper.html()).toContain(props.jumperNumber);
	});
});
