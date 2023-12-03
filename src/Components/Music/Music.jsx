import React from "react";
import s from './Music.module.css'

const Music = (props) => {
	return <div>
		<p>Music</p>
		<img className= {s.music} src="/src/img/Music.png" alt="music" />
	</div>

}

export default Music