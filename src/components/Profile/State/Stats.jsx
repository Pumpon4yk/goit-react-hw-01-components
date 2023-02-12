import { List, Item,Label, Quantity } from './Stats.styled';
import PropTypes from 'prop-types';

export const Stats = ({ stats }) => {
    const { followers, views, likes } = stats;
    
    return (
        <List>
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
        </List>
    );
};

Stats.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};
