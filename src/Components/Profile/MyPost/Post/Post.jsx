import React from "react"
import s from './Post.module.css'
// console.log(s);

const Post = () => {
	return <div>
		<div className={s.post}>
			<img src="https://media.kg-portal.ru/movies/a/avatar/posters/avatar_10.jpg" alt="avatar" />
			<p className="text-post">Post-1</p>
		</div>
	</div>

}

export default Post