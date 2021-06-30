import React, { useCallback, useEffect, useRef } from "react"
import PokedexTotal from '../components/pokedexTotal'
import PokeCard from '../components/pokeCard/pokeCard'
import useFetchList from "../utils/useFetchList"
import create from 'zustand'

const useStore = create(set => ({
	page: 1,
	setPage: () => set(state => ({ page: state.page + 1 })),
}))

function Home() {
	const page = useStore(state => state.page)
	const setPage = useStore(state => state.setPage)
	const { loading, error, list, total } = useFetchList(page)
	const loader = useRef(null)

	const handleObserver = useCallback((entries) => {
		const target = entries[0]
		if (target.isIntersecting) {
			setPage()
		}
	}, []);


	useEffect(() => {
		const option = {
			root: null,
			rootMargin: "100px",
			threshold: 0
		};
		const observer = new IntersectionObserver(handleObserver, option);
		if (loader.current) observer.observe(loader.current);
	}, [handleObserver]);

	return (
		<div className="page">
			<PokedexTotal total={total} />
			<div className="page-content">
				<div className="grid">
					{
						list.map((d) =>
							<PokeCard
								key={d.id}
								id={d.id}
								name={d.name}
								types={d.pokemons[0].types}
							/>
						)
					}
				</div>
				{loading && <p>Loading...</p>}
				{error && <p>Error!</p>}
			</div>
			<div ref={loader} />
		</div>
	)
}

export default Home