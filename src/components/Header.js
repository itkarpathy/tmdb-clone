import { Link } from 'react-router-dom'
import '../Custom.scss'
import logo from '../assets/logo.svg'

const Header = () => {
	return (
		<div className="navigation">
			<img src={logo} className="logo" />
			<nav >

				<ul>
					<li>
						<Link to="/">Movies</Link>
					</li>

					<li>
						<Link to="/stats">Stats page</Link>
					</li>
				</ul>
			</nav >
		</div >

	)
}

export default Header