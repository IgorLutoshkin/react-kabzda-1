import React from "react"
import style from './ProfileInfo.module.css'



const ProfileInfo = () => {
	return <div>
		<div className={style.wrap}>
			<img
				className={style.mainImg}
				src="https://avatars.mds.yandex.net/i?id=1e5897885d020d6ea081d4cddc7a02d9_l-4883843-images-thumbs&n=13"
				alt="moto"
			/>
		</div>

		<div className="info">
			<img
				className={style.avatar}
				src="https://avatars.mds.yandex.net/i?id=b49aa8f64149767653bed6d71b9365c6_l-4935356-images-thumbs&n=13"
				alt=""
			/>
			<p className="description">DESCRIPTION</p>
		</div>

	</div>
}

export default ProfileInfo