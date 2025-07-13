import React from 'react';
import { Link } from 'react-router-dom';


const Pagination = () => {
 
    return (
        <ul className="pagination">
            <li><Link to="#">1</Link></li>
            <li><Link to="#" className="active">2</Link></li>
            <li><Link to="#">3</Link></li>
            <li><Link to="#"><i className="ti-arrow-right"></i></Link></li>
        </ul>
    );
};

export default Pagination;