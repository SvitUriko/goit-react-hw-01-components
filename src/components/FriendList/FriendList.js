import PropTypes from 'prop-types';
import { FriendListItem } from "components/FriendListItem/FriendListItem"
import { Item, List } from "./FriendList.styled"


export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(friend => ( 
                <Item key={friend.id}>
                    <FriendListItem friend={friend}/>
                </Item>))}    
        </List>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };