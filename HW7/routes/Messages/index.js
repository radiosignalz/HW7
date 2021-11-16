// import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
import {MessageInput} from "../../components/MessageInput";
import {MessageList} from "../../components/MessageList";
// import {getChatMessagesById} from "../../store/messages/selectors";
// import {createMessage} from "../../helpers";
// import {hasChatById} from "../../store/chats/selectors";
// import useBotAnswerTimeDelay from "../../Hooks/useBotAnswerTimeDelay";
import {withChatMessages} from '../../hoks/withChatMessages'




export const MessagesRender= ({
    messageList,
    hasChat,
    onSendMessage
                              }) => {



    // const {chatId}=useParams();
    // const dispatch=useDispatch();
    // const messageList=useSelector(getChatMessagesById(chatId));
    // const hasChat = useSelector(hasChatById(chatId));



    // const [messageList,setMessageList]=useState([])
    // const sendMessage=(text,author)=>{
    //     const newMessage={
    //         text,
    //         author,
    //     };
        // const newMessageList=[...messageList, newMessage];
        // setMessageList(newMessageList);
    //     dispatch(createMessage(newMessage,chatId))
    // };
    //
    // const onSendMessage=(value)=>{
    //     sendMessage(value,'user');
    // };




    // const BotText="Hello!!!"
    //
    // useBotAnswerTimeDelay(messageList,sendMessage, [BotText])



    // if(!CHATS.find(({id})=>id===chatId)){
    if(!hasChat){
        return<Redirect to="/chats"/>;
    }

    return (
        <div>
            <h1>HW7</h1>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>

        </div>
    );
};

export const Messages=withChatMessages(MessagesRender)