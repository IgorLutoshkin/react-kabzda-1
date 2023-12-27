import React from "react"
import style from './Profile.module.css'
import MyPost from "./MyPost/MyPost"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


const Profile = (props) => {
	return <section className={style.profile_wrap}>
		<ProfileInfo />
		<MyPost postArr = {props.state.postArr} />

	</section>
}

export default Profile