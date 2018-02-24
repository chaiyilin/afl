import React from 'react';
import classnames from 'classnames';
import './component.scss';

export const Component = ({ name, value, isShowingRed }) => {
	return (

		<div className="indicator">
			<div className="name">
				{name.toUpperCase()}
			</div>

			<div className={classnames('value', { red: isShowingRed })}>
				{value}
			</div>
		</div>
	)
}