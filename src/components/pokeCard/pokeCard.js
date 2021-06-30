import React from 'react'
import PokeType from '../pokeType/pokeType'
import { Link } from 'react-router-dom'
import './style.css'

function PokeCard({id, name, types = []}) {
	const baseUrlAssets = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'

	return (
		<div className="grid-item">
			<Link to={"/pokemon/" + name}>
				<article className={`pokemon-box bg-light bg-light--${types[0].type.name}`}>
					<img
						className="pokemon-box__img"
						src={baseUrlAssets + "/" +id+ ".png"}
						alt={name}
						width="82px"
						height="82px" />
					<p className="pokemon-box__number">#{id}</p>
					<h2 className="pokemon-box__name">{name}</h2>
					<figure className="pokemon-box__types">
						<figcaption className="visually-hidden">Types</figcaption>
						<div className="pokemon-types">
							{ types.map((d, i) => <PokeType key={i} type={d.type.name}/> ) }
						</div>
					</figure>
				</article>
			</Link>
		</div>
	)
}

export default PokeCard