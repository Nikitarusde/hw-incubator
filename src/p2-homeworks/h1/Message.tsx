import React from 'react'
import style from "./Message.module.css"

type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}


function Message({avatar, name, message, time}: MessageProps) {
    return (
        <div className={style.message}>
            <div className={style.block}>
                <img className={style.image} src={avatar} alt=""/>
                <div className={style.box}>
                    <div className={style.name}>{name}</div>
                    <div className={style.massegeBox}>
                        <div>{message}</div>
                        <div className={style.time}>{time}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
