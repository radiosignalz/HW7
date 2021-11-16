import React from 'react';
import {List,  } from '@material-ui/core'
import propTypes from 'prop-types'
import {Chat} from './Chat'
import {Chats} from "../routes";


export const ChatList = ({list,onDeleteChat}) => {
    return (
        <List>
            {
                list.map((item)=>(<Chat onClick={()=> onDeleteChat(item.id)} key={item.id}{...item}/>))
            }
        </List>
    );
};

Chat.propTypes={
    list:propTypes.arrayOf(propTypes.shape({
        id:propTypes.string.isRequired,
        name: propTypes.string,
    })
    )
}