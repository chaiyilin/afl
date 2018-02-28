import { App } from './index'
import { Component } from './Component';

it('should export component', () => {
	expect(App).toEqual(Component);
});
