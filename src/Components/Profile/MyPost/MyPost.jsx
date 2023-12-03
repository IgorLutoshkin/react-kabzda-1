import React from "react"
import './MyPost.module.css'
import Post from "./Post/Post"

const MyPost = (props) => {
	let postArr = [
		{ id: 1, message: "My first post!!!", like: 15 },
		{ id: 2, message: "Favorite post!", like: 11 },
		{ id: 3, message: "Post our me!", like: 23 }
	]

	let postName = postArr.map(p => (<Post post={p.message} likeCount={p.like} />))
	return <div>
		<div className="my_post">
			<h2>My post</h2>
			<input className="input_my_post" type="text" />
			{postName}

			{/* <Post post={postArr[0].message} likeCount={postArr[0].like} />
			<Post post={postArr[1].message} likeCount={postArr[1].like} />
			<Post post={postArr[2].message} likeCount={postArr[2].like} /> */}
		</div>
	</div>

}

export default MyPost