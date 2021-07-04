import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function Post() {
    //This will let you get information from the URL
    const { id } = useParams();

    const query = new URLSearchParams(useLocation().search)

    return (
        <>
            <h2>ID IS: {id} </h2>
            <h2>{query.get('first')}</h2>
            <h2>{query.get('last')}</h2>
        </>
    )
}

export default Post
