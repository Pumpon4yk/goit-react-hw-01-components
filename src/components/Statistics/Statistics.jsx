import {Statistics} from './Statistics.styled'
import { Title } from './Title/Title'
import { List } from './List/List'
import PropTypes from 'prop-types';



export const Section = ({statis}) => {

    return (
        <Statistics>
            <Title title="Upload stats"/>
                <List statis={statis}/>
        </Statistics>
    )
}


Section.propTypes = {
    title: PropTypes.string,
    statis: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
}
