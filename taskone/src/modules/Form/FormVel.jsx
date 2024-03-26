import React, { useState } from 'react';

export default function FormVel() {
    const [comments, setComments] = useState([]);

    const handleComment = (e) => {
        e.preventDefault();

        // Access input value by its name attribute
        const newComment = e.target.comment.value;

        const oneObj = { comment: newComment };

        setComments([...comments, oneObj]);

        console.log(comments);
        e.target.reset();
    };

    return (
        <>
            <h5>2:Create comment or review section using form.</h5>
            <div className='Comment-section'>
                <form onSubmit={handleComment}>
                    <input type="text" name='comment' placeholder='Write Your Comment' />
                    <br /><br />
                    <button className='btn_on' type="submit">Submit</button>
                </form>

                <h3>Comments....</h3>
                {
                    comments.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>
                                    <b>{index+1} {item.comment}</b>
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
