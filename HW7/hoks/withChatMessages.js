import React from 'react';
import {useParams,} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesById} from "../store/messages/selectors";
import {sendMessageWithThunk} from "../store/messages/action";
import {USER_AUTHOR} from "../constants/authors";
import {hasChatById} from "../store/chats/selectors";


export const withChatMessages = (Component) => {
    return (props) => {
        const {chatId} = useParams();
        const dispatch = useDispatch();
        const messageList = useSelector(getChatMessagesById(chatId));
        const hasChat = useSelector(hasChatById(chatId));

        const onSendMessage = (text) => {
            dispatch(sendMessageWithThunk(USER_AUTHOR, text, chatId))
        };

        return <Component
            {...props}
            messageList={messageList}
            hasChat={hasChat}
            onSendMessaage={onSendMessage}
        />

    }

}
