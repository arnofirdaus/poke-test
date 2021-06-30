import React from 'react'
import './style.css';

const StatBar = ({ label, value }) => {
	const percent = value / 255 * 100
	return (
		<div className="statbar">
			<div style={{ display: "flex" }}>
				<div className="statbar__label">{label}</div>
				<div className="statbar__value">{value}</div>
			</div>
			<div className="statbar__bar">
				<div className="statbar__bar__value" style={{ width: percent + "%" }}></div>
			</div>
		</div>
	)

}

export default StatBar