import React, { useEffect } from "react"
import PokeType from "../components/pokeType/pokeType"
import StatBar from "../components/statBar/statBar"
import useFetchDetail from "../utils/useFetchDetail"

function Detail(props) {
	const { name } = props.match.params
	const { loading, description, stats, types } = useFetchDetail(name)
	
	useEffect(() => {
		console.log(name)
	}, [])

	function goBack(){
		props.history.goBack();
	}

	return(
		<div className={`page-detail bg-light bg-light--${types[0]?.type.name}`}>
			{
				loading ? <p className="color--white">Loading...</p> :
					<>
					<div className="page-detail__header">
						<div className="header-button" onClick={goBack}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
						</div>
						<div className="header-title">
							<div className="page-detail__subtitle">#{description.id}</div>
							<div className="page-detail__title">{name}</div>
						</div>
					</div>
					<div className="page-detail__img">
						<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${description.id}.png`}/>
						<div className="page-detail__type">
							{
								types.map((data, i) => <PokeType key={i} type={data.type.name}/>)
							}
						</div>
					</div>
					<div className="page-detail__panel">
						<div className="panel">
							<div className="page-detail__description">
								{description.description}
							</div>
							<br />
							<hr />
							<br />
							<div className="page-detail__stats">
								{
									stats.map((data, i) => <StatBar key={i} label={data.stat.name} value={data.base_stat}/>)
								}
							</div>
						</div>
					</div>
				</>
			}
		</div>
	)
}

export default Detail