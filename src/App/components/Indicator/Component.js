import React from 'react';
import classnames from 'classnames';
import { MEDIUM } from '../../utils/deviceSizeTypes';
import './component.scss';

export const Component = ({ name, value, isShowingRed, deviceSizeType }) => {
	return (

		<div className={classnames('indicator', { indicator_medium: deviceSizeType === MEDIUM })}>
			<div className="name">
				{name.toUpperCase()}
			</div>

			<div className={classnames('value', { value_red: isShowingRed })}>
				{value}
			</div>
		</div>
	)
}