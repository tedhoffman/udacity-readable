import React, { Component } from 'react'
import { fetchData } from '../utils/api'

/*

Post detail is available at /:category/:post_id

Post is displayed with the following:
1) Title
2) Body
3) Author
4) Number of comments
5) Current score
6) Voting mechanism to upvote or downvote the post
7) Buttons or links for editing or deleting that post

Listed comments are displayed with the following:
1) Author
2) Current score
3) Voting mechanism to upvote or downvote the comment
4) Buttons or links for editing or deleting that comment

The voting mechanism works and correctly displays the new vote score after clicking for both the post and comments.

All comments for a post are displayed below the post body.

A mechanism for adding a new comment is visible on the detail page and functional.
*/

class App extends Component {
	componentDidMount() {
		console.log(fetchData('categories', 'GET'))
	}

  render() {
    return (
      <div className="App">
          <h1 className="App-title">Hello World</h1>
      </div>
    );
  }
}

export default App;
