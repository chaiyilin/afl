import React from 'react';
import './component.scss';

export const Component = ({ disposals, handballs, kicks, tackles, marks, score }) => {
	return (
		<div className="card">
			<div className="top" >
				<div className="clubLogoContainer">
					<img
						alt={clubName}
						src={clubLogoUrl}
						className="clubLogo"
					/>
				</div>

				<div className="playerPhotoContainer">
					<img
						alt={firstName + ' ' + lastName}
						src={playPhotoUrl}
						className="playerPhoto"
					/>
				</div>

				<div className="jumperNumber">
					{jumperNumber}
				</div>
			</div>

			<div className="bottom">
				<div className="fullName">
					<span className="firstName">{firstName}</span>
					<span className="lastName">{lastName}</span>
				</div>

				<div className="clubName">
					{clubName}
				</div>
			</div>
		</div>
	)
}