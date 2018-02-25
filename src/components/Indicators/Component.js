import React from 'react';
import classnames from 'classnames';
import { Indicator } from '../Indicator';
import { LARGE } from '../../utils/deviceSizeTypes';
import './component.scss';

export const Component = ({ disposals, handballs, kicks, tackles, marks, score, title, isShowingRed, deviceSizeType }) => {
	return (
		<div className="indicators_wrapper">
			<div className={classnames('title', { title_red: isShowingRed })}>{title}</div>
			<div className="indicators">
				<Indicator name="disposals" value={disposals} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>
				<Indicator name="handballs" value={handballs} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>
				<Indicator name="kicks" value={kicks} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>
				<Indicator name="tackles" value={tackles} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>
				<Indicator name="marks" value={marks} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>
				{deviceSizeType !== LARGE && <Indicator name="score" value={score} deviceSizeType={deviceSizeType} isShowingRed={isShowingRed}></Indicator>}
			</div>

		</div>
	)
}