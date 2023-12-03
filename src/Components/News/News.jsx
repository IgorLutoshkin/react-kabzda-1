import React from "react";
import s from './News.module.css'

const News = (props) => {
	return <div>
		<p>News</p>
		<img className={s.news} src="/src/img/News.png" alt="news" />
	</div>

}

export default News