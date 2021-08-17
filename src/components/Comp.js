import React, {useState, useEffect} from 'react';
import Pagination2 from './Pagination2';
import Loader from './Loader'
import AddComponent from './AddComponent';


function Comp() { 

    const [messages, updateMessages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const [loader, loaderHandler] = useState(true);
    const [showAddComment, showCommentHandler] = useState(false);


    useEffect(() => {      // () => {  - это функция обработчик
        loaderHandler(true);
        fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${currentPage}`)
            .then(response => response.json())
            .then(result => {
                console.log('result ==>', result);
                updateMessages(result.data);

                
                setTotalPages(Math.ceil(result.total / result.per_page));
                loaderHandler(false)
 
            });
    }, [currentPage]);   



    return (
        <div className={"container"}>
            <h1 className="title">Form for submitting comments with fields</h1>
            <div className={"messages-wrapper"}>
                {messages.map(item=> {
                    return (<div key={item.id} className={'message'}>{item.text}</div>)
                })}
                
            </div>
            <div className={'buttons-wrapper'}>
                <button type="button" className="btn btn-outline-success" onClick={()=>showCommentHandler(true)}>Add comment</button>
                <button type="button" className="btn btn-outline-success" disabled={currentPage >= totalPages}onClick={()=>setCurrentPage(currentPage + 1)}>Show more</button>
            </div>
            <Pagination2 
                currentPage={currentPage}
                totalPages={totalPages}
                onChangePaginationPage={setCurrentPage}
            />

            {loader && (<Loader/>)}
            {showAddComment && (<AddComponent
                showCommentHandler={showCommentHandler}

             />)}
        </div>
        
    )
}

export default Comp;