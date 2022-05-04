import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  shops?: Maybe<Array<Maybe<CoffeeShop>>>;
  slug: Scalars['String'];
  totalShops?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['String'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  address: Scalars['String'];
  categories?: Maybe<Array<Maybe<Category>>>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  latitude?: Maybe<Scalars['String']>;
  likes: Scalars['Int'];
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photos: CoffeeShopPhoto;
  updatedAt: Scalars['String'];
  user: User;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  shop: CoffeeShop;
  updatedAt: Scalars['String'];
  url: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: MutationResponse;
  createCoffeeShop: MutationResponse;
  editCoffeeShop: MutationResponse;
  editProfile: MutationResponse;
  login: LoginResult;
  toggleFollow: MutationResponse;
  toggleLike: MutationResponse;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  address?: InputMaybe<Scalars['String']>;
  categories: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photos: Scalars['Upload'];
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['Int'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationEditProfileArgs = {
  avatarURL?: InputMaybe<Scalars['Upload']>;
  email?: InputMaybe<Scalars['String']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleFollowArgs = {
  username: Scalars['String'];
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchCoffeeShop?: Maybe<Array<Maybe<CoffeeShop>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeCategories?: Maybe<Array<Maybe<Category>>>;
  seeCategory?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeCoffeeShop?: Maybe<CoffeeShop>;
  seeCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeProfile?: Maybe<User>;
};


export type QuerySearchCoffeeShopArgs = {
  keyword: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
};


export type QuerySeeCategoriesArgs = {
  page: Scalars['Int'];
};


export type QuerySeeCategoryArgs = {
  category: Scalars['String'];
  page: Scalars['Int'];
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  username: Scalars['String'];
};

export type CoffeeShopFragmentFragment = { __typename?: 'CoffeeShop', id: number, name: string, latitude?: string | null, longitude?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, likes: number, user: { __typename?: 'User', username: string, avatarURL?: string | null }, photos: { __typename?: 'CoffeeShopPhoto', id: number, url: string }, categories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', ok: boolean, token?: string | null, error?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type ToggleLikeMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type ToggleLikeMutation = { __typename?: 'Mutation', toggleLike: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type CreateCoffeeShopMutationVariables = Exact<{
  name: Scalars['String'];
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  photos: Scalars['Upload'];
  categories: Scalars['String'];
}>;


export type CreateCoffeeShopMutation = { __typename?: 'Mutation', createCoffeeShop: { __typename?: 'MutationResponse', ok: boolean, error?: string | null } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', username: string, avatarURL?: string | null, email: string } | null };

export type SeeCoffeeShopsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type SeeCoffeeShopsQuery = { __typename?: 'Query', seeCoffeeShops?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, latitude?: string | null, longitude?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, likes: number, user: { __typename?: 'User', username: string, avatarURL?: string | null }, photos: { __typename?: 'CoffeeShopPhoto', id: number, url: string }, categories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null } | null> | null };

export type SeeCoffeeShopQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type SeeCoffeeShopQuery = { __typename?: 'Query', seeCoffeeShop?: { __typename?: 'CoffeeShop', id: number, name: string, latitude?: string | null, longitude?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, likes: number, user: { __typename?: 'User', username: string, avatarURL?: string | null }, photos: { __typename?: 'CoffeeShopPhoto', id: number, url: string }, categories?: Array<{ __typename?: 'Category', id: number, name: string } | null> | null } | null };

export type SearchCoffeeShopQueryVariables = Exact<{
  keyword: Scalars['String'];
}>;


export type SearchCoffeeShopQuery = { __typename?: 'Query', searchCoffeeShop?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, photos: { __typename?: 'CoffeeShopPhoto', id: number, url: string } } | null> | null };

export const CoffeeShopFragmentFragmentDoc = gql`
    fragment CoffeeShopFragment on CoffeeShop {
  id
  name
  latitude
  longitude
  createdAt
  isMine
  isLiked
  likes
  user {
    username
    avatarURL
  }
  photos {
    id
    url
  }
  categories {
    id
    name
  }
}
    `;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($email: String!, $username: String!, $password: String!) {
  createAccount(email: $email, username: $username, password: $password) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation toggleLike($id: Int!) {
  toggleLike(id: $id) {
    ok
    error
  }
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const CreateCoffeeShopDocument = gql`
    mutation createCoffeeShop($name: String!, $latitude: String, $longitude: String, $address: String, $description: String, $photos: Upload!, $categories: String!) {
  createCoffeeShop(
    name: $name
    latitude: $latitude
    longitude: $longitude
    address: $address
    description: $description
    photos: $photos
    categories: $categories
  ) {
    ok
    error
  }
}
    `;
export type CreateCoffeeShopMutationFn = Apollo.MutationFunction<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;

/**
 * __useCreateCoffeeShopMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeShopMutation, { data, loading, error }] = useCreateCoffeeShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      address: // value for 'address'
 *      description: // value for 'description'
 *      photos: // value for 'photos'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>(CreateCoffeeShopDocument, options);
      }
export type CreateCoffeeShopMutationHookResult = ReturnType<typeof useCreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationResult = Apollo.MutationResult<CreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationOptions = Apollo.BaseMutationOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    username
    avatarURL
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SeeCoffeeShopsDocument = gql`
    query seeCoffeeShops($page: Int) {
  seeCoffeeShops(page: $page) {
    ...CoffeeShopFragment
  }
}
    ${CoffeeShopFragmentFragmentDoc}`;

/**
 * __useSeeCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopsQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useSeeCoffeeShopsQuery(baseOptions?: Apollo.QueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
      }
export function useSeeCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
        }
export type SeeCoffeeShopsQueryHookResult = ReturnType<typeof useSeeCoffeeShopsQuery>;
export type SeeCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopsLazyQuery>;
export type SeeCoffeeShopsQueryResult = Apollo.QueryResult<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>;
export const SeeCoffeeShopDocument = gql`
    query seeCoffeeShop($id: Int!) {
  seeCoffeeShop(id: $id) {
    ...CoffeeShopFragment
  }
}
    ${CoffeeShopFragmentFragmentDoc}`;

/**
 * __useSeeCoffeeShopQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeeCoffeeShopQuery(baseOptions: Apollo.QueryHookOptions<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>(SeeCoffeeShopDocument, options);
      }
export function useSeeCoffeeShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>(SeeCoffeeShopDocument, options);
        }
export type SeeCoffeeShopQueryHookResult = ReturnType<typeof useSeeCoffeeShopQuery>;
export type SeeCoffeeShopLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopLazyQuery>;
export type SeeCoffeeShopQueryResult = Apollo.QueryResult<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>;
export const SearchCoffeeShopDocument = gql`
    query searchCoffeeShop($keyword: String!) {
  searchCoffeeShop(keyword: $keyword) {
    id
    name
    photos {
      id
      url
    }
  }
}
    `;

/**
 * __useSearchCoffeeShopQuery__
 *
 * To run a query within a React component, call `useSearchCoffeeShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCoffeeShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCoffeeShopQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useSearchCoffeeShopQuery(baseOptions: Apollo.QueryHookOptions<SearchCoffeeShopQuery, SearchCoffeeShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchCoffeeShopQuery, SearchCoffeeShopQueryVariables>(SearchCoffeeShopDocument, options);
      }
export function useSearchCoffeeShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchCoffeeShopQuery, SearchCoffeeShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchCoffeeShopQuery, SearchCoffeeShopQueryVariables>(SearchCoffeeShopDocument, options);
        }
export type SearchCoffeeShopQueryHookResult = ReturnType<typeof useSearchCoffeeShopQuery>;
export type SearchCoffeeShopLazyQueryHookResult = ReturnType<typeof useSearchCoffeeShopLazyQuery>;
export type SearchCoffeeShopQueryResult = Apollo.QueryResult<SearchCoffeeShopQuery, SearchCoffeeShopQueryVariables>;