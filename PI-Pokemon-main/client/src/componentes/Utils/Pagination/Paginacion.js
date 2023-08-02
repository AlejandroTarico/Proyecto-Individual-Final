import React from 'react';
import './Paginacion.css';


const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
  
  return (
    <div className='container'>
      <button className='paginationButton' onClick={onPrevPage} disabled={currentPage === 1}>Anterior</button>
      <span className='numeration'>
        {/* {currentPage} de {totalPages} */}
        {pageNumbers.map((pageNumber) => (
          <span key={pageNumber} className={pageNumber === currentPage ? 'activePage' : ''}>
            {pageNumber + ' '} 
          </span>
        ))}
      </span>
      <button className='paginationButton' onClick={onNextPage} disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  );
};

export default Pagination;