import React from 'react';
import classnames from 'classnames';
import './component.scss';
import { Player } from '../Player';
import { Indicators } from '../Indicators';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

export const Component = ({ player, playerAverage, playerTotal, playerBestOfSeason, deviceSizeType }) => {
	return (
		<div className={classnames('playerDetails', { playerDetails_large: deviceSizeType === LARGE })}>
			<div className={classnames('card', { card_primary: deviceSizeType === LARGE })}>
				<Player {...player}></Player>
			</div>

			<div className={classnames('card', { card_secondary: deviceSizeType === LARGE })}>
				<Indicators {...playerTotal} isShowingRed={false} title="TOTAL" deviceSizeType={deviceSizeType}></Indicators>
			</div>

			{(deviceSizeType === SMALL || deviceSizeType === MEDIUM) &&
				(<div className={classnames('card', { card_secondary: deviceSizeType === LARGE })}>
					<Indicators {...playerBestOfSeason} deviceSizeType={deviceSizeType} isShowingRed={true} title="BEST OF SEASON"></Indicators>
				</div>
				)
			}
			<div className={classnames('card', { card_secondary: deviceSizeType === LARGE })}>
				{deviceSizeType === LARGE &&
					<Indicators {...playerAverage} deviceSizeType={deviceSizeType} isShowingRed={true} title="AVERAGE"></Indicators>}
			</div>
		</div>

	)
}