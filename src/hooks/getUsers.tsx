import { useEffect } from 'react';
import { getUsers } from '../app/features/Users/usersSlice';
import { useAppSelector, useAppDispatch } from '../app/features/hooks';

export const useGetUsers = () => {
  const users = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return {
    users,
  };
};
