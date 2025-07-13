import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface PaginationProps {}

const Pagination: FC<PaginationProps> = (): ReactElement => {
  return (
    <div className="pagination-wraper">
      <ul>
        <li><Link to="#"><i className="ti-angle-left"></i></Link></li>
        <li className="active"><Link to="#">1</Link></li>
        <li><Link to="#">2</Link></li>
        <li><Link to="#">3</Link></li>
        <li><Link to="#"><i className="ti-angle-right"></i></Link></li>
      </ul>
    </div>
  );
};

export default Pagination;