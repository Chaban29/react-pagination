import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { Users } from './Users';
import { Pagination } from './Pagination';

const App: FC = (): JSX.Element => {
  const [users, setUsers] = useState<[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(10);
  const [usersPerPage] = useState<number>(5);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setUsers(response.data);
      setLoading(false);
    };
    getUsers();
  }, []);

  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUserPage = users.slice(firstUserIndex, lastUserIndex);

  console.log(currentUserPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>Posts List</h1>
      <Users users={currentUserPage} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export { App };
