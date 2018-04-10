import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../utils/api'

class App extends Component {
	state = {
		activeCategory: null,
		categoriesList: [],
		confirmDialogOpen: false,
		newPostCategory: null,
		newPostContent: null,
		newPostTitle: null,
  }

	componentDidMount() {
		//let x = fetchData('categories', 'GET')
	}

  render() {
    return (
      <div className="container">
        <h1 className="App-title">Readable: All Posts</h1>

				<div className="sort">
					<form>
						<div>
							<label className="display-cat">Displaying category:</label>
							<select className="sort-select">
								<option>All</option>
							</select>
						</div>
						<div>
							<label className="display-sort">Sorting by:</label>
							<select className="sort-select">
								<option>Date</option>
								<option>Score: High to Low</option>
								<option>Score: Low to High</option>
							</select>
						</div>
					</form>
				</div>

				<article className="rdb-post">
					<header>
						<h2>Post Title</h2>
						<h3>by <a href="#">Author</a></h3>
					</header>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga labore quidem, vero tempora libero dolores possimus natus magni eos sint unde, ipsum repudiandae. Facere similique incidunt error beatae molestiae blanditiis.</p>
					<p>Quae sed velit, sit ex eveniet officiis. Provident voluptatibus voluptatum odit amet suscipit dolorem, distinctio, laboriosam voluptates, at quae repellat unde? Nobis, fugit? Minima earum quidem eos suscipit, asperiores assumenda.</p>
					<footer>
						<div className="rdb-post-score">
							<a className="rdb-upvote" href="#"><i className="far fa-thumbs-up"></i></a>
							&nbsp;+11&nbsp;
							<a className="rdb-downvote" href="#"><i className="far fa-thumbs-down"></i></a>
						</div>
						<div className="rdb-post-comments"><a href="#">3 Comments</a></div>
						<div className="rdb-post-edit"><a href="#"><i className="fas fa-edit"></i></a>&nbsp;<a href="#"><i className="fas fa-trash"></i></a></div>
					</footer>
				</article>

      </div>
    )
  }
}

export default App;
