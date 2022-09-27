import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { HeartOutlined } from '@ant-design/icons';

const DetailsPage = () => {
	let { id } = useParams();
	const [details, setDetails] = useState('')

	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f6f869bdbe9f5928b68c55d9cdd34333`)
			.then((response) => response.json())
			.then((data) => setDetails(data));
	}, [id])

	const runtime = Math.floor(details.runtime)

	// const genres = 

	// console.log(genres)

	return (
		<>
			<div className="details__page">
				<div className="content__left">
					<div className="wrapper">
						<img src={`https://image.tmdb.org/t/p/original/${details?.poster_path}`} alt="bg-poster" />
						<div className="content__left__bottom">
							<img src={`https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg`} alt="logo" />
							<div className="stream">
								<span>Now Streaming</span>
								<p>Watch Now</p>
							</div>
						</div>
					</div>

				</div>
				<div className="content__right">
					<div className="content__header">
						<h1>{details.title}</h1>
						<div className="heart">
							<p>{runtime} minutes</p>
							<HeartOutlined id="heart"/>
						</div>

					</div>

					<div className="details">
						<p>Languages: {details.original_language?.toUpperCase()}</p>

						<div className="overview">
							<h4>Overview</h4>
							<span>{details.tagline}</span>
							<p>{details.overview}</p>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default DetailsPage