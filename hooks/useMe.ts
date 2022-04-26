import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { isLoggedInVar, logUserOut } from '../apollo/vars';
import { useMeQuery } from '../graphql/generated';

const useMe = () => {
  const hasToken = useReactiveVar(isLoggedInVar);
  const { data } = useMeQuery({ skip: !hasToken });
  console.log(data);
  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return { data };
};

export default useMe;
