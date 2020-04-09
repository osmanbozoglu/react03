import React from 'react';
// import { Link , Redirect} from 'react-router-dom';


const PostItem = (props) => {
    console.log(props)
    return (
        <>
            <div>{props.match.params.id}</div>
        </>
    )
}

export default PostItem;