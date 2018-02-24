import React from 'react';
import './component.scss';
import { Player } from '../Player';

export const Component = ({ player, playerAverage, playerTotal }) => {
	return (
		<div className="playerDetails">
			<Player {...player}></Player>
		</div>
	)
}