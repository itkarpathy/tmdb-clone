import React, { useEffect, useState } from 'react';
import BarChart from '../charts/BarChart'

const StatsPage = () => {
	const [data, setData] = useState({
		labels: [],
		datasets: [
			{
				label: '',
				data: [],
				backgroundColor: '',
			},
		],
	})

	useEffect(() => {
		const fetchMovies = async () => {
			let title = []
			let votes = []

			const url = `https://api.themoviedb.org/3/discover/movie?api_key=f6f869bdbe9f5928b68c55d9cdd34333&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate
			`
			try {
				const res = await fetch(url);
				const datas = await res.json()
				for (const dataObj of datas.results) {
					title.push(dataObj.title)
					votes.push(dataObj.vote_average)
				}
				setData({
					labels: title,
					datasets: [{
						label: 'Votes by 10 score / Top 10 movies',
						data: votes,
						backgroundColor: 'rgba(255, 99, 132, 0.5)',
					}]
				})

				setData({
					labels: title,
					datasets: [{
						label: 'Votes by 10 score / Top 10 movies',
						data: votes,
						backgroundColor: 'rgba(255, 99, 132, 0.5)',
					}]
				})

			} catch (error) {
				console.log(error)
			}
		};

		fetchMovies();
	}, [])

	return (
		<div className="statistics align-items-center" >
			<h3>Statistics 10 top rated movies</h3>
			< div className="chart">
				<BarChart data={data} />
			</div>
		</div >

	)
}

export default StatsPage