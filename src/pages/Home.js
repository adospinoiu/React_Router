import React, { useEffect } from 'react'

function Home() {
    //This section of code ensures that the component is rendered "at the top". Otherwise, if the user is scrolling down, and then switches pages, the page would load at the same "scroll position" the user was on. This will load the page starting at the top
    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
    return (
        <h1>Home</h1>
    )
}

export default Home
