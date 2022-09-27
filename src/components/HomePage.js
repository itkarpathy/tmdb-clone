import { useEffect, useState } from 'react'
import Search from './Search'
import Movies from './Movies'
import Lists from './Lists'
import Spinner from './Spinner'
import { useGetMoviesByNameQuery } from '../services/movies'

const Home = () => {
	const [query, setQuery] = useState('')
	const [sort, setSort] = useState('popularity.desc')
	const [genres, setGenres] = useState('10749')
	const [lists, setLists] = useState('')
	const { data, error, isLoading } = useGetMoviesByNameQuery(query)

	useEffect(() => {
		const fetchMovies = async () => {
			const url = `https://api.themoviedb.org/3/discover/movie?api_key=f6f869bdbe9f5928b68c55d9cdd34333&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1&with_genres=${genres}&with_watch_monetization_types=flatrate
			`
			try {
				const res = await fetch(url);
				const datas = await res.json()
				setLists(datas.results)
			} catch (error) {
				console.log(error)
			}
		};

		fetchMovies();
	}, [sort])

	const sortingHandler = (e) => {
		e.preventDefault()
		setSort(e.target.value)
	}

	console.log('lists',)

	{ isLoading && <Spinner /> }
	{ error && <h1 className="visually-hidden">Something went wrong...</h1> }

	return (
		<>
			<main>
				<section className="section__1">
					<p className="bg-fade"></p>
					<div className="wrapper__title">
						<h1>Welcome.</h1>
						<h3>Millions of movies, TV shows and people to discover. Explore now</h3>
					</div>
					<Search getQuery={(q) => setQuery(q)} />
				</section>

				<section className="section__2">
					<div className="filters"><span>What is popular </span>
						<div className="selector" >
							<select class="form-select" aria-label="Default select example" value={sort} onChange={sortingHandler}>
								<option value="popularity.desc">Popularity</option>
								<option value="vote_average.desc">Vote avarage</option>
								<option value="release_date.gte">Release date</option>
							</select>
						</div>
					</div>

				</section>

				<section className="all__movies">
					{!query && lists && <Lists lists={lists} />}

					{data && data.results.map(movie => {
						return <Movies movie={movie} key={movie.id} />
					})}
				</section>
			</main>




		</>
	)
}

export default Home