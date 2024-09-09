import React from "react";

function Pagination(props) {

    const getNumbers = (num) => {
        const numbers = [];
        for (let i = 1; ((i <= num) && (i < 7)); i++) {
            numbers.push(i.toString());
        }
        if(num > 6){
            numbers[4] = '...';
            numbers[5] = num.toString();
        }
        return numbers;
    }

    return (
        <div className="pagination">
            {getNumbers(props.number).map((number) => (
                <p className={`pagination__number ${props.currentPage === number ? 'pagination__number-current-page' : ''}`}>{number}</p>
            ))}
        </div>
    );
}

export default Pagination;