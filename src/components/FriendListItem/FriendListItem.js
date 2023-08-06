import { Avatar, Name, Status } from "./FriendListItem.styled"

export const FriendListItem = ({friend : {avatar, name, isOnline}}) => {
    return (
        <>
            <Status isOnlineStatus={isOnline}></Status> 
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </>)
    
} 