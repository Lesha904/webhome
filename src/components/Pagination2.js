import React, { useImperativeHandle } from 'react';

const Pagination2 = ({ currentPage, totalPages, onChangePaginationPage }) => {
    const pages = [];

    for(let i=1; i <= totalPages; i++) {
        pages.push(i)
    }


    return (
        <div className={"pagination-wrapper"}>
            {pages.map(i => (
                <div 
                    key={i} 
                    className={currentPage === i ? 'pagination-item active-pagination-item' :  'pagination-item btn btn-outline-primary'}
                    onClick={()=>onChangePaginationPage(i)}
                >
                {i}
                </div>))}
        </div>
    )
}

export default Pagination2;