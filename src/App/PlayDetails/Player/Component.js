import React from 'react';

export const Component = ({ firstName, lastName, clubName, clubLogoUrl, playPhotoUrl, jumperNumber }) => {
	return (
		<div className="card">
			<div className="top">
				<div className="clubLogo">
					<img
						alt={clubName}
						src={clubLogoUrl}
					/>
				</div>

				<div className="playerPhoto">
					<img
						alt={firstName + ' ' + lastName}
						src={playPhotoUrl}
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