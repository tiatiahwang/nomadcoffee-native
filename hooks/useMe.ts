import { useReactiveVar } from '@apollo/client';
import { useEffect } from 'react';
import { logUserOut, tokenVar } from '../apollo/vars';
import { useMeQuery } from '../graphql/generated';

const useMe = () => {
  const hasToken = useReactiveVar(tokenVar);
  const { data } = useMeQuery({ skip: !hasToken });

  useEffect(() => {
    if (data?.me === null) {
      logUserOut();
    }
  }, [data]);

  return data?.me;
};

export default useMe;
