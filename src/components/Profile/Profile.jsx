import {
    Profile,
    Description,
    Photo,
    UserName,
    Tag,
    Location,
    Stats,
    Item,
    Label,
    Quantity,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Card = ({ userData }) => {
    const {
        username,
        tag,
        location,
        avatar,
        stats: { followers, views, likes },
    } = userData;

    return (
        <Profile>
            <Description>
                <Photo src={avatar} talt={username} />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <Item>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </Item>

                <Item>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </Item>

                <Item>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </Item>
            </Stats>
        </Profile>
    );
};

Card.propTypes = {
    userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }).isRequired
    }).isRequired
};
