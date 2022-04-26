import { ApolloClient, createHttpLink } from '@apollo/client';
import { InMemoryCache } from '@apollo/client/cache';
import { setContext } from '@apollo/client/link/context';
import { tokenVar } from './vars';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: { ...headers, token: tokenVar() },
  };
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        seeCoffeeShops: {
          keyArgs: false,
          merge: (existing = [], incoming = []) => [...existing, ...incoming],
        },
      },
    },
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
