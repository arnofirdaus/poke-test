import React from 'react'
import PokeType from '../pokeType/pokeType'
import { Link } from 'react-router-dom'
import './style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PokeCard({id, name, types = []}) {
	const baseUrlAssets = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

	return (
		<div className="grid-item">
			<Link to={"/pokemon/" + name}>
				<div className={`pokemon-box bg-light bg-light--${types[0].type.name}`}>
					<LazyLoadImage
						className="pokemon-box__img"
						src={baseUrlAssets + "/" +id+ ".png"}
						alt={name}
						width="82px"
						height="82px" />
					<p className="pokemon-box__number">#{id}</p>
					<h2 className="pokemon-box__name">{name}</h2>
					<div className="pokemon-box__types">
						<div className="pokemon-types">
							{ types.map((d, i) => <PokeType key={i} type={d.type.name}/> ) }
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default PokeCard