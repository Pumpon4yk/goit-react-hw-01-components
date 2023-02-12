import { List, Item, Status, Icon, Name } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <Item key={id}>
                    <Status status={isOnline} />
                    <Icon src={avatar} alt={name}/>
                    <Name>{name}</Name>
                </Item>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    }))
}
