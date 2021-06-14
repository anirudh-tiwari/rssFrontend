import React, { useEffect, useState } from 'react'
import "../App.css";
import Api from "../Api";

function ViewFeed() {
    const [feed, setFeed] = useState("");
    useEffect(() => {
        Api.getFeed().then((response) => {
            setFeed(response.data)
        });
    }, [])

    return (
        <div>
            {feed.map((feedElement) => {
                // <Card product={feedElement} />
                <h1>{feedElement}</h1>
            })}
        </div>
    )
}

export default ViewFeed

