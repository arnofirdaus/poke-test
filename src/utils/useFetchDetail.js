import { useState, useEffect, useCallback } from "react"
import axios from "axios"

const url = 'https://beta.pokeapi.co/graphql/v1beta'

function useFetchDetail(name) {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [description, setDescription] = useState({})
	const [stats, setStats] = useState([])
	const [types, setTypes] = useState([])

	const fetchData = useCallback(async () => {
		try {
			setLoading(true)
			setError(false)
			const data = {
				query: ` query getPokemon {
					species: pokemon_v2_pokemonspecies(where: {name: { _eq: "${name}" }} limit: 1) {
						id
						gender_rate
						hatch_counter
						name
						description: pokemon_v2_pokemonspeciesflavortexts(limit: 1 where: {pokemon_v2_language: {name: {_eq: "en"}}}) {
							flavor_text
						}
						evolutions: pokemon_v2_evolutionchain {
							species: pokemon_v2_pokemonspecies(order_by: {order: asc}) {
								id
								name
								evolves_from_species_id
								evolutions: pokemon_v2_pokemonevolutions {
									min_level
									min_affection
									min_beauty
									min_happiness
									gender_id
									time_of_day
									move: pokemon_v2_move {
										name
									}
									by_held_item: pokemonV2ItemByHeldItemId {
										name
									}
									item: pokemon_v2_item {
										name
									}
									evolution_trigger: pokemon_v2_evolutiontrigger {
										name
									}
									location: pokemon_v2_location {
										name
									}
								}
							}
						}
						egg_groups: pokemon_v2_pokemonegggroups {
							group: pokemon_v2_egggroup {
								name
							}
						}
						pokemons: pokemon_v2_pokemons {
							id
							name
							height
							weight
							types: pokemon_v2_pokemontypes {
								type: pokemon_v2_type {
									name
								}
							}
							abilities: pokemon_v2_pokemonabilities {
								ability: pokemon_v2_ability {
									name
								}
							}
							stats: pokemon_v2_pokemonstats {
								base_stat
								stat: pokemon_v2_stat {
									name
								}
							}
						}
					}
				}
			`
			}

			const res = await axios.post(
				url, data
			)

			const poke = res.data.data.species[0]

			await setDescription({
				description: poke.description[0].flavor_text,
				id: poke.id
			})

			await setTypes(poke.pokemons[0].types)
			await setStats(poke.pokemons[0].stats)

			setLoading(false)
		} catch (err) {
			setError(err)
		}
	}, [])

	useEffect(() => {
		fetchData()
	}, [fetchData])

	return { loading, error, description, stats, types }
}

export default useFetchDetail