import React, {useState} from "react";
import Comment from "./Comment";

function Comments({ comments }) {
    const [commentsVisibility, setCommentsVisibility] = useState('unset')

    function toggleVisibility(e) {
        if (e.target.textContent === 'Hide Comments') {
            setCommentsVisibility('none')
        } else {
            setCommentsVisibility('unset')
        }
    }

    const commentsList = comments.map(commentObj => {
        return (
            <Comment
	            key={commentObj.id}
	            user={commentObj.user}
                comment={commentObj.comment}
	      />
        )
    })

    return (
        <div>
            <button onClick={toggleVisibility}>{commentsVisibility === 'unset' ? 'Hide Comments' : 'Show Comments'}</button>
            <hr />
            <h3>{comments.length} Comments</h3>
            <div style={{display: commentsVisibility}}>
                {commentsList}
            </div>
        </div>
    )
}

export default Comments