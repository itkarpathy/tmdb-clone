import { useState } from 'react'

const Search = ({ getQuery }) => {
	const [search, setSearch] = useState('')

	const searchHelper = (q) => {
		setSearch(q.target.value)
		getQuery(q.target.value)
	}

	return (
		<div class="input-group input-group-lg">
			<input type="text" class="form-control" aria-label="Sizing example input" onChange={(q) => searchHelper(q)} />
			<span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
		</div>
	)
}

export default Search