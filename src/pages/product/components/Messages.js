import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { ContainerComments, CommentsUsers, CommentsAdmin } from '../styled-components';

export const Messages = ({msj}) => {
  return (
    <ContainerComments>
        <CommentsUsers>
            <div><svg><FaUserCircle/></svg></div>
            <p>{msj.message}</p>
        </CommentsUsers>
        {msj._id && !msj.response 
            ? null
            : <CommentsAdmin>
            <div><svg><SiHomeassistantcommunitystore/></svg></div>
            <p>{msj.response}</p>
        </CommentsAdmin>
        }
    </ContainerComments>
  )
}

