import { Profile } from './Profile.styled';

import { Description } from './Description/Dscription';
import { Stats } from './State/Stats';
import PropTypes from 'prop-types';

export const Card = ({userData}) => {
    return (
        <Profile
        >
            <Description
            username={userData.username}
            tag={userData.tag}
            location={userData.location}
            avatar={userData.avatar}/>
        <Stats stats={userData.stats}/>
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
