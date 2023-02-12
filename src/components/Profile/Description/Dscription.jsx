import {Container, Photo, UserName, Tag, Location} from './Description.styled'
import PropTypes from 'prop-types';


export const Description = ({avatar, username, tag,location}) => {
    return (
        <Container>
            <Photo src={avatar} talt={username}/>
            <UserName>{username}</UserName>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Container>
    )
}

Description.propTotype ={
    username: PropTypes.string,   
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
}