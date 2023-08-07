import PropTypes from 'prop-types';
import { Avatar, Name, Status } from "./FriendListItem.styled"

export const FriendListItem = ({friend : {avatar, name, isOnline}}) => {
    return (
        <>
            <Status isOnlineStatus={isOnline}></Status> 
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </>)   
} 

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};
