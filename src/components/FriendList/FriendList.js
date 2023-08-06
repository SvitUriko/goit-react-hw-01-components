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