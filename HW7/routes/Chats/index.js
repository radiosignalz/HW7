// import React, {useCallback, useEffect} from "react";
import {Switch,Route} from "react-router-dom";
// import {useSelector, useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "../../components/ChatList";
import {Messages} from "../Messages";
// import {getChatList} from "../../store/chats/selectors";
// import {addChat, removeChat, setChats} from "../../store/chats/action";
// import {nanoid} from "nanoid";
// import {CHATS} from "../../mocks/chats";
// import {removeMessagesByChatID} from "../../store/messages/action";
import {withChats} from "../../hoks/withChats";





const useStyles=makeStyles({
    wrapper:{
        display:"grid",
        gridTemplateColumns: "200px 1fr"
    }
});




export const ChatsRender = ({
    chats,
    onCreateChat,
    onDeleteChat
                            }) => {
    // const chats=useSelector(getChatList);
    // const dispatch = useDispatch();
    const classes=useStyles();
    //
    // const onCreate = useCallback(() => {
    //     dispatch(createChat({
    //     id:nanoid(),
    //     name:"chatName"
    //
    // }))
    //
    // },[]);
    //
    // const onDelete = (chatId) => {
    //     dispatch(removeChat(chatId))
    //     dispatch(removeMessagesByChatID(chatId))
    // }
    //
    // useEffect(()=>{
    //     dispatch(setChats(CHATS))
    // },[])



    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onClick={onDeleteChat} list={chats}/>
                <Button onClick={onCreateChat}>Create Chat</Button>

            </div>
            <div>
                <Switch>
                    <Route component={Messages} path="/chats/:chatId"/>
                </Switch>
            </div>


        </div>
    );
};

export const Chats=withChats(ChatsRender)