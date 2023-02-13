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
            <Title>{title}</Title>
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
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    ),
};
