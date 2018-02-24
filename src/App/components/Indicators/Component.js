import React from 'react';
import { Indicator } from '../Indicator';
import { LARGE } from '../../utils/deviceSizeTypes';
import './component.scss';

export const Component = ({ disposals, handballs, kicks, tackles, marks, score, title, isShowingRed, deviceSizeType }) => {
	return (
		<div>
			<div className="title">{title}</div>
			<div className="indicators">
				<Indicator name="disposals" value={disposals}></Indicator>
				<Indicator name="handballs" value={handballs}></Indicator>
				<Indicator name="kicks" value={kicks}></Indicator>
				<Indicator name="tackles" value={tackles}></Indicator>
				<Indicator name="marks" value={marks}></Indicator>
				{deviceSizeType !== LARGE && <Indicator name="score" value={score}></Indicator>}
			</div>

		</div>
	)
}