import React from "react"
import style from './Profile.module.css'
import MyPost from "./MyPost/MyPost"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = () => {
	return <section className={style.profile_wrap}>
		<ProfileInfo />
		<MyPost />

	</section>
}

export default Profile