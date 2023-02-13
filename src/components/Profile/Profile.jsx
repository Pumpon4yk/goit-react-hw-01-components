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
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact(
        PropTypes.shape({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        })
    ),
};
