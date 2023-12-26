import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import style from './Dialogs.module.css'

const Dialogs = (props) => {

	let dialogName = props.dialogArr.map(d => (<DialogItem name={d.name} id={d.id} />))
	let messageName = props.messageArr.map(m => (<MessageItem message={m.message} />))
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