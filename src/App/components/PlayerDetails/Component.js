import React from 'react';
import classnames from 'classnames';
import './component.scss';
import { Player } from '../Player';
import { Indicators } from '../Indicators';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

export const Component = ({ player, playerAverage, playerTotal, playerBestOfSeason, deviceSizeType }) => {
	return (
		<div className={classnames('playerDetails', { large: deviceSizeType === LARGE })}>
			<div className="card doubleWidth">
				<Player {...player}></Player>
			</div>

			<div className="card">
				<Indicators {...playerTotal} isShowingRed={false} title="TOTAL"></Indicators>
			</div>

			{(deviceSizeType === SMALL || deviceSizeType === MEDIUM) &&
				(<div className="card">
					<Indicators {...playerBestOfSeason} deviceSizeType={deviceSizeType} isShowingRed={true} title="BEST OF SEASON"></Indicators>
				</div>
				)
			}
			<div className="card">
				{deviceSizeType === LARGE &&
					<Indicators {...playerAverage} deviceSizeType={deviceSizeType} isShowingRed={true} title="AVERAGE"></Indicators>}
			</div>
		</div>

	)
}