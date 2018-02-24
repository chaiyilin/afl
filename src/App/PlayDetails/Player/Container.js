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

export const Container = () => {
	return (
		<Component
			{...player}></Component>
	)
}