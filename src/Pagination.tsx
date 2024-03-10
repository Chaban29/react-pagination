import { FC } from 'react';

interface PaginationProps {
  usersPerPage: number;
  totalUsers: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  usersPerPage,
  totalUsers,
  paginate,
}: PaginationProps): JSX.Element => {
  const pageNumbers: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {pageNumbers.map((number) => (
        <li className='page-item' key={number}>
          <a href='#!' className='page-link' onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </div>
  );
};

export { Pagination };
