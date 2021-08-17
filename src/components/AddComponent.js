import React, {useState, useEffect} from 'react';

function AddComponent({ showCommentHandler }) {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeText = (e) => {
        setText(e.target.value)
    }
    
    
    const saveComment = () => {
        fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
            method: 'POST',
            body: JSON.stringify({ name, text }),
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "*",
                "Access-Control-Request-Method": "*"
            }
        })
        .then(() => {
            setName('');
            setText('');
            showCommentHandler(false)
        });
    }

    return (
        <div className="form-wrapper">
            <div className={"main-form"}>
                <div className="second_block">
                            <div className="form-row ">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="name"
                                        value={name}
                                        placeholder="Your name"
                                        onChange={onChangeName}
                                    /> 
                            </div>
                            <div className="form-row ">
                                <label htmlFor="commet" className="form-label">Text</label>
                                    <textarea  
                                        className="form-control" 
                                        rows="1" 
                                        id="commet" 
                                        value={text}
                                        placeholder="Your comment"
                                        onChange={onChangeText}
                                    ></textarea>
                            </div>
                    </div>
                    <div className="thirt_block">
                        <button onClick={() => showCommentHandler(false)} className="btn btn-outline-primary " type="button">Cancel </button>
                        <button onClick={saveComment}  className="btn btn-outline-primary " type="button" disabled={!name || !text}>Save </button>
                    </div>
            </div>
        </div>
    )

}

export default AddComponent;
