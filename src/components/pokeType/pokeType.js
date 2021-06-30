import React from 'react'
import './style.css';

const PokeType = ({type}) => {
	return <div className={'pokemon-type bg bg--'+ type}>{type}</div>

}

export default PokeType