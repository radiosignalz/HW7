import React, {useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getChatList} from "../store/chats/selectors";
import {createChat} from "../helpers";
import {removeChat, addChat} from "../store/chats/action";
import {removeMessagesByChatID} from "../store/messages/action";



export const withChats = (Component) => {
    return (props)=>{
        const chats=useSelector(getChatList);
        const dispatch=useDispatch();

        const onCreateChat=useCallback(()=>{
            dispatch(addChat(createChat('chat name')))

        },[]);
        const onDeleteChat = useCallback((chatId) => {
            dispatch(removeChat(chatId))
            dispatch(removeMessagesByChatID(chatId))},[])


        return <Component
            {...props} chats={chats} onCreateChat={onCreateChat} onDeleteChat={onDeleteChat}
        />


        }

};

