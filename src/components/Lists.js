import { Link } from 'react-router-dom'

const Lists = ({ lists }) => {

	return lists && (

		lists.map(el => {

			return (
				<div class="grid" key={el.id}>
					<Link to={`movie/${el.id}`}>
						<div class="g-col-4 votes">
							<img src={`https://image.tmdb.org/t/p/original/${el.poster_path}`} width="200px" class="card-img-top rounded" alt="pics" />
							<div className="vote">
								<span>{el.vote_average}</span><span>%</span>
							</div>

							<div class="card-body">
								<p class="card-text">{el.title?.substring(0, 15).concat('...') || el?.original_namesubstring(0, 20)}</p>
								<span>{el.release_date}</span>
							</div>

						</div>
					</Link>
				</div>


			)
		})

	)
}

export default Lists