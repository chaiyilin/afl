import React from 'react';
import { Component } from './Component';
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

const playerAverage = {
	disposals: playerTotal.disposals / playerFromData.games.length,
	handBalls: playerTotal.handBalls / playerFromData.games.length,
	marks: playerTotal.marks / playerFromData.games.length,
	tackles: playerTotal.tackles / playerFromData.games.length,
	score: playerTotal.score / playerFromData.games.length,
}

const playerDetails = { player, playerTotal, playerAverage }
export const Container = () => {
	return (
		<Component
			{...playerDetails}></Component>
	)
}