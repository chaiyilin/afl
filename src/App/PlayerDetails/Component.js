import React from 'react';
import classnames from 'classnames';
import './Component.scss';
import { Player } from '../../components/Player';
import { Indicators } from '../../components/Indicators';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';

export const Component = ({ player, playerAverage, playerTotal, playerBestOfSeason, deviceSizeType }) => {
	return (
		<div className="playerDetails">
			<div className="card card_primary">
				<Player {...player}></Player>
			</div>

			<div className="card card_subsequetial">
				<Indicators {...playerTotal} isShowingRed={false} title="TOTAL" deviceSizeType={deviceSizeType}></Indicators>
			</div>

			{(deviceSizeType === SMALL || deviceSizeType === MEDIUM) &&
				(<div className={classnames('card', 'card_subsequetial', { card_secondary: deviceSizeType === LARGE })}>
					<Indicators {...playerBestOfSeason} deviceSizeType={deviceSizeType} isShowingRed={true} title="BEST OF SEASON"></Indicators>
				</div>
				)
			}

			{deviceSizeType === LARGE &&
				<div className={classnames('card', 'card_subsequetial', { card_secondary: deviceSizeType === LARGE })}>
					<Indicators {...playerAverage} deviceSizeType={deviceSizeType} isShowingRed={true} title="AVERAGE"></Indicators>
				</div>
			}
		</div>

	)
}