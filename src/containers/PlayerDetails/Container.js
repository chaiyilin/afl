import React from 'react';
import withSizes from 'react-sizes'
import { PlayerDetails } from '../../components/PlayerDetails';
import { SMALL, MEDIUM, LARGE } from '../../utils/deviceSizeTypes';
const { players } = require('./players.json');

const playerFromData = players.find(player => player.jumperNumber === 23);
const player = {
	firstName: playerFromData.firstname,
	lastName: playerFromData.lastname,
	jumperNumber: playerFromData.jumperNumber,
	clubName: playerFromData.club.toUpperCase(),
	clubLogoUrl: 'assets/Swans-rev.svg',
	playPhotoUrl: 'assets/240399.png',
}

const playerTotal =
	playerFromData.games.reduce((total, currentValue, currentIndex, arr) => {
		total.kicks += currentValue.kicks;
		total.handballs += currentValue.handballs;
		total.marks += currentValue.marks;
		total.tackles += currentValue.tackles;
		total.score += currentValue.score;
		return total;
	},
		// todo: don't know where are disposals. fake as 200
		{ disposals: 200, kicks: 0, handballs: 0, marks: 0, tackles: 0, score: 0 });

const playerBestOfSeason =
	playerFromData.games.reduce((total, currentValue, currentIndex, arr) => {
		if (currentValue.kicks > total.kicks) {
			total.kicks = currentValue.kicks;
		}

		if (currentValue.handballs > total.handballs) {
			total.handballs = currentValue.handballs;
		}

		if (currentValue.marks > total.marks) {
			total.marks = currentValue.marks;
		}

		if (currentValue.tackles > total.tackles) {
			total.tackles = currentValue.tackles;
		}

		if (currentValue.score > total.score) {
			total.score = currentValue.score;
		}
		return total;
	},
		// todo: don't know where are disposals. fake as 200
		{ disposals: 200, kicks: 0, handballs: 0, marks: 0, tackles: 0, score: 0 });

const playerAverage = {
	disposals: Math.round(playerTotal.disposals / playerFromData.games.length),
	kicks: Math.round(playerTotal.kicks / playerFromData.games.length),
	handballs: Math.round(playerTotal.handballs / playerFromData.games.length),
	marks: Math.round(playerTotal.marks / playerFromData.games.length),
	tackles: Math.round(playerTotal.tackles / playerFromData.games.length),
	score: Math.round(playerTotal.score / playerFromData.games.length * 100) / 100,
}

export const playerDetails = { player, playerBestOfSeason, playerTotal, playerAverage }
export const Container = ({ deviceSizeType }) => {
	return (
		<PlayerDetails
			{...playerDetails} deviceSizeType={deviceSizeType}></PlayerDetails>
	)
}


export const mapSizesToProps = ({ width }) => {
	let deviceSizeType;
	if (width <= 414) {
		deviceSizeType = SMALL;
	}

	if (width > 414 && width <= 768) {
		deviceSizeType = MEDIUM;
	}

	if (width > 768) {
		deviceSizeType = LARGE;
	}

	return { deviceSizeType };
}

export const enhanced = withSizes(mapSizesToProps)(Container)
