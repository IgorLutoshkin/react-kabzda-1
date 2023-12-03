import React from "react"
import s from './Post.module.css'
// console.log(s);



const Post = (props) => {


	return <div>
		<div className={s.post}>
			<img src="https://media.kg-portal.ru/movies/a/avatar/posters/avatar_10.jpg" alt="avatar" />
			<p className="text-post">{props.post}</p>
			<p className="text-post">Like {props.likeCount}</p>
		</div>
	</div>

}

export default Post