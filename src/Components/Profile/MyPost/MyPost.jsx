import React from "react"
import  './MyPost.module.css'
import Post from "./Post/Post"

const MyPost = () => {
	return <div>
		<div className="my_post">
			<h2>My post</h2>
			<input className="input_my_post" type="text" />
		<Post/>
		<Post/>
		<Post/>
		<Post/>
		</div>
	</div>

}

export default MyPost