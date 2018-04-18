import React from 'react'
import { apiGetCategories, apiGetCategoryPosts } from '../utils/api-categories'

export default function ShowCategories ({source}) {
	return(
		<select className="sort-select">
			{source.map((cat) => (
				<option key={cat}>
					{cat}
				</option>
			))}
		</select>
	)
}
