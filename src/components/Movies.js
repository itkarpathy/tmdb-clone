import { Link } from 'react-router-dom'

const Movies = ({ movie }) => {
	return (

		<div className="p-4 flex">
			<div class="grid" key={movie.id}>
				<Link to={`movie/${movie.id}`}>
					<div class="g-col-4 votes">
						<img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`} width="200px" class="card-img-top rounded" alt="pics" />
						<div className="vote">
							<span>{movie.vote_average}</span><span>%</span>
						</div>

						<div class="card-body">
							<p class="card-text">{movie.title?.substring(0, 15).concat('...') || movie?.original_namesubstring(0, 20)}</p>
							<span>{movie.release_date}</span>
						</div>

					</div>
				</Link>
			</div>
		</div>

	)
}

export default Movies