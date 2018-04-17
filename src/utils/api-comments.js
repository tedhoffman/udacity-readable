import { fetchData, postData } from '../utils/api'
const uuidv1 = require('uuid/v1')

export function apiGetAllCommentsById (id) {
	return fetchData(`posts/${id}/comments`, 'GET')
}

export function apiPostComment (title, body, author, category, parentId) {
	let postBody = {
		id: uuidv1(),
		timestamp: Date.now(),
		title: title,
		body: body,
		author: author,
		category: category,
		parentId: parentId
	}
	postData('comments', postBody)
		.then(data => console.log(data))
		.catch(error => console.error(error))
}

export function apiGetSingleCommentById (id) {
	return fetchData(`comments/${id}`, 'GET')
}

export function apiCommentsVoteById (id, option = 'upVote') {
	//POST /posts/:id	Used for voting on a post.	option - [String]: Either "upVote" or "downVote".
	return postData(`comments/${id}`, 'GET')
}

export function apiEditComment (id, title, body) {
	//PUT /comments/:id
}

export function apiDeleteComment (id) {
	fetchData(`comments/${id}`, 'DELETE')
}
