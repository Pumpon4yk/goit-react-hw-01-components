import { Stat, Item, Label, Percentage } from './List.styled';
import PropTypes from 'prop-types';

export const List = ({statis}) => {
    return (
        <Stat>
        {statis.map(({id,label,percentage}) => (
            <Item key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </Item>
        ))}
        </Stat>
    );
};

List.propTypes = {
    statis: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}
