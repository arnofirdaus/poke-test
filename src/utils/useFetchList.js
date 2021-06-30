import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import create from 'zustand'

const url = 'https://beta.pokeapi.co/graphql/v1beta'

const useStore = create(set => ({
  list: [],
	total: 0,
  setList: (data) => set(state => ({ list: [ ...state.list, ...data ] })),
  setTotal: (data) => set(() => ({ total: data})),
}))

function useFetchList(page) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
  const setList = useStore(state => state.setList)
  const setTotal = useStore(state => state.setTotal)
  const list = useStore(state => state.list)
  const total = useStore(state => state.total)


	const fetchData = useCallback(async () => {
		try {
			setLoading(true)
			setError(false)
			const limit = 50
			const offset = (page - 1) * limit 
			const data = {
				query: `query getPokemons {
					species: pokemon_v2_pokemonspecies(limit: ${limit}, offset: ${[offset]}, order_by: {id: asc}) {
						id
						name
						pokemons: pokemon_v2_pokemons {
							id
							types: pokemon_v2_pokemontypes {
								type: pokemon_v2_type {
									name
								}
							}
						}
					}
					species_aggregate: pokemon_v2_pokemonspecies_aggregate {
						aggregate {
							count
						}
					}
				}`
			}

			const res = await axios.post(
				url, data
			)

			await setList(res.data.data.species)
			await setTotal(res.data.data.species_aggregate.aggregate.count)

			setLoading(false)
		} catch (err) {
			setError(err)
		}
	}, [page])

	useEffect(() => {
		fetchData()
	}, [fetchData, page])

	return { loading, error, list, total }
}

export default useFetchList