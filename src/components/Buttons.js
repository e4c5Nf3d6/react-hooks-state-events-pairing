import React, {useState} from "react";

function Buttons({ videoUpvotes, videoDownvotes }) {
    const [upvotes, setUpvotes] = useState(videoUpvotes)
    const [downvotes, setDownvotes] = useState(videoDownvotes)

    return (
        <div>
            <button id="upvotes" onClick={() => setUpvotes(upvotes => upvotes + 1)}>{upvotes} 👍</button>
            <button id="downvotes" onClick={() => setDownvotes(downvotes => downvotes + 1)}>{downvotes} 👎</button>
        </div>
    )
}

export default Buttons