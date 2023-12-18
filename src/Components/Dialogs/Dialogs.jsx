import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from './Dialogs.module.css'

const Dialogs = (props) => {

	let dialogArr = [
		{ id: 1, name: "Dimych" },
		{ id: 2, name: "Sveta" },
		{ id: 3, name: "Victor" },
		{ id: 4, name: "Valera" },
		{ id: 5, name: "Andrey" }
	]

	let messageArr = [
		{ id: 1, message: "Hello!" },
		{ id: 2, message: "Hello! How are you?" },
		{ id: 3, message: "Good!" },
		{ id: 4, message: "YO)" },
		{ id: 5, message: "Respect!" }
	]

	let dialogName = dialogArr.map(d => (<DialogItem name={d.name} id={d.id} />))
	let messageName = messageArr.map(m => (<MessageItem message={m.message} />))
	/* [
		<DialogItem name={dialogArr[0].name} id={dialogArr[0].id} />,
		<DialogItem name={dialogArr[1].name} id={dialogArr[1].id} />,
		<DialogItem name={dialogArr[2].name} id={dialogArr[2].id} />,
		<DialogItem name={dialogArr[3].name} id={dialogArr[3].id} />,
		<DialogItem name={dialogArr[4].name} id={dialogArr[4].id} />
	] */

	return (
		<div className={style.dialogsWrap}>


			<div className={style.dialogsItem}>

				{dialogName}
				{/* 				<DialogItem name={dialogArr[0].name} id={dialogArr[0].id} />
				<DialogItem name={dialogArr[1].name} id={dialogArr[1].id} />
				<DialogItem name={dialogArr[2].name} id={dialogArr[2].id} />
				<DialogItem name={dialogArr[3].name} id={dialogArr[3].id} />
				<DialogItem name={dialogArr[4].name} id={dialogArr[4].id} /> */}
			</div>

			<div className={style.messagesItem}>

				{messageName}
				{/* <MessageItem message={messageArr[0].message} />
				<MessageItem message={messageArr[1].message} />
				<MessageItem message={messageArr[2].message} />
				<MessageItem message={messageArr[3].message} />
				<MessageItem message={messageArr[4].message} /> */}
			</div >
		</div>
	)
}

export default Dialogs