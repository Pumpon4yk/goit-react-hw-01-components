import {
    Statistics,
    Title,
    List,
    Item,
    Label,
    Percentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Section = ({ statis, title }) => {
    return (
        <Statistics>
        {title ?<Title>{title}</Title>: "" }
            <List>
                {statis.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </Statistics>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    statis: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
