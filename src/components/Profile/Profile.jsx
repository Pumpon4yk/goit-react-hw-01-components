import { Profile } from './Profile.styled';

import { Description } from './Description/Dscription';
import { Stats } from './State/Stats';
import PropTypes from 'prop-types';

export const Card = ({userData}) => {
const {username, tag, location, avatar, stats} = userData;

    return (
        <Profile
        >
            <Description
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}/>
        <Stats stats={stats}/>
        </Profile>
    );
};

Card.propTypes = {
    username: PropTypes.string,   
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact(PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }))
}
