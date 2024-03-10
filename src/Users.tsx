import { FC } from 'react';

interface IUser {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

interface IUsersProps {
  users: IUser[];
  loading: boolean;
}

const Users: FC<IUsersProps> = ({
  users,
  loading,
}: IUsersProps): JSX.Element => {
  if (loading) return <h2 className='text-secondary'>Loading...</h2>;
  return (
    <ul className='list-group mb2'>
      {users.map((user) => (
        <div key={user.id}>
          <li className='list-group-item mb-1'>
            {user.title}
            <span>{user.body}</span>
          </li>
        </div>
      ))}
    </ul>
  );
};

export { Users };
