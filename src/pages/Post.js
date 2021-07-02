import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
    //This will let you get information from the URL
    const { id } = useParams();
    
    return (
        <h2>ID IS: { id } </h2>
    )
}

export default Post
