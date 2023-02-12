import { Titel } from "./Title.styled";
import PropTypes from 'prop-types';


export const Title = ({title}) =>{
    return (
        <Titel>{title}</Titel>
    )
}

Title.propTypes ={
    title: PropTypes.string.isRequired
}