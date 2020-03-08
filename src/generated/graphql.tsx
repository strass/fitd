import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  AWSTimestamp: any,
};


export type CreateRollsInput = {
  id: Scalars['ID'],
  dice: Array<Maybe<Scalars['Int']>>,
  createdAt: Scalars['AWSTimestamp'],
};

export type DeleteRollsInput = {
  id: Scalars['ID'],
  createdAt: Scalars['AWSTimestamp'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createRolls?: Maybe<Rolls>,
  updateRolls?: Maybe<Rolls>,
  deleteRolls?: Maybe<Rolls>,
};


export type MutationCreateRollsArgs = {
  input: CreateRollsInput
};


export type MutationUpdateRollsArgs = {
  input: UpdateRollsInput
};


export type MutationDeleteRollsArgs = {
  input: DeleteRollsInput
};

export type Query = {
   __typename?: 'Query',
  getRolls?: Maybe<Rolls>,
  listRolls?: Maybe<RollsConnection>,
};


export type QueryGetRollsArgs = {
  id: Scalars['ID'],
  createdAt: Scalars['AWSTimestamp']
};


export type QueryListRollsArgs = {
  filter?: Maybe<TableRollsFilterInput>,
  limit?: Maybe<Scalars['Int']>,
  nextToken?: Maybe<Scalars['String']>
};

export type Rolls = {
   __typename?: 'Rolls',
  id: Scalars['ID'],
  dice: Array<Maybe<Scalars['Int']>>,
  createdAt: Scalars['AWSTimestamp'],
};

export type RollsConnection = {
   __typename?: 'RollsConnection',
  items?: Maybe<Array<Maybe<Rolls>>>,
  nextToken?: Maybe<Scalars['String']>,
};

export type Subscription = {
   __typename?: 'Subscription',
  onCreateRolls?: Maybe<Rolls>,
  onUpdateRolls?: Maybe<Rolls>,
  onDeleteRolls?: Maybe<Rolls>,
};


export type SubscriptionOnCreateRollsArgs = {
  id?: Maybe<Scalars['ID']>,
  dice?: Maybe<Array<Maybe<Scalars['Int']>>>,
  createdAt?: Maybe<Scalars['AWSTimestamp']>
};


export type SubscriptionOnUpdateRollsArgs = {
  id?: Maybe<Scalars['ID']>,
  dice?: Maybe<Array<Maybe<Scalars['Int']>>>,
  createdAt?: Maybe<Scalars['AWSTimestamp']>
};


export type SubscriptionOnDeleteRollsArgs = {
  id?: Maybe<Scalars['ID']>,
  dice?: Maybe<Array<Maybe<Scalars['Int']>>>,
  createdAt?: Maybe<Scalars['AWSTimestamp']>
};

export type TableBooleanFilterInput = {
  ne?: Maybe<Scalars['Boolean']>,
  eq?: Maybe<Scalars['Boolean']>,
};

export type TableFloatFilterInput = {
  ne?: Maybe<Scalars['Float']>,
  eq?: Maybe<Scalars['Float']>,
  le?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  ge?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  contains?: Maybe<Scalars['Float']>,
  notContains?: Maybe<Scalars['Float']>,
  between?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type TableIdFilterInput = {
  ne?: Maybe<Scalars['ID']>,
  eq?: Maybe<Scalars['ID']>,
  le?: Maybe<Scalars['ID']>,
  lt?: Maybe<Scalars['ID']>,
  ge?: Maybe<Scalars['ID']>,
  gt?: Maybe<Scalars['ID']>,
  contains?: Maybe<Scalars['ID']>,
  notContains?: Maybe<Scalars['ID']>,
  between?: Maybe<Array<Maybe<Scalars['ID']>>>,
  beginsWith?: Maybe<Scalars['ID']>,
};

export type TableIntFilterInput = {
  ne?: Maybe<Scalars['Int']>,
  eq?: Maybe<Scalars['Int']>,
  le?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  ge?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  contains?: Maybe<Scalars['Int']>,
  notContains?: Maybe<Scalars['Int']>,
  between?: Maybe<Array<Maybe<Scalars['Int']>>>,
};

export type TableRollsFilterInput = {
  id?: Maybe<TableIdFilterInput>,
  dice?: Maybe<TableIntFilterInput>,
  createdAt?: Maybe<TableIntFilterInput>,
};

export type TableStringFilterInput = {
  ne?: Maybe<Scalars['String']>,
  eq?: Maybe<Scalars['String']>,
  le?: Maybe<Scalars['String']>,
  lt?: Maybe<Scalars['String']>,
  ge?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  notContains?: Maybe<Scalars['String']>,
  between?: Maybe<Array<Maybe<Scalars['String']>>>,
  beginsWith?: Maybe<Scalars['String']>,
};

export type UpdateRollsInput = {
  id: Scalars['ID'],
  dice?: Maybe<Array<Maybe<Scalars['Int']>>>,
  createdAt: Scalars['AWSTimestamp'],
};

export type CreateRollsMutationVariables = {
  createrollsinput: CreateRollsInput
};


export type CreateRollsMutation = (
  { __typename?: 'Mutation' }
  & { createRolls: Maybe<(
    { __typename?: 'Rolls' }
    & Pick<Rolls, 'id' | 'dice' | 'createdAt'>
  )> }
);

export type OnCreateRollsSubscriptionVariables = {};


export type OnCreateRollsSubscription = (
  { __typename?: 'Subscription' }
  & { onUpdateRolls: Maybe<(
    { __typename?: 'Rolls' }
    & Pick<Rolls, 'id' | 'dice' | 'createdAt'>
  )> }
);

export type ListRollsQueryVariables = {};


export type ListRollsQuery = (
  { __typename?: 'Query' }
  & { listRolls: Maybe<(
    { __typename?: 'RollsConnection' }
    & { items: Maybe<Array<Maybe<(
      { __typename?: 'Rolls' }
      & Pick<Rolls, 'id' | 'dice' | 'createdAt'>
    )>>> }
  )> }
);


export const CreateRollsDocument = gql`
    mutation createRolls($createrollsinput: CreateRollsInput!) {
  createRolls(input: $createrollsinput) {
    id
    dice
    createdAt
  }
}
    `;
export type CreateRollsMutationFn = ApolloReactCommon.MutationFunction<CreateRollsMutation, CreateRollsMutationVariables>;

/**
 * __useCreateRollsMutation__
 *
 * To run a mutation, you first call `useCreateRollsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRollsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRollsMutation, { data, loading, error }] = useCreateRollsMutation({
 *   variables: {
 *      createrollsinput: // value for 'createrollsinput'
 *   },
 * });
 */
export function useCreateRollsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRollsMutation, CreateRollsMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateRollsMutation, CreateRollsMutationVariables>(CreateRollsDocument, baseOptions);
      }
export type CreateRollsMutationHookResult = ReturnType<typeof useCreateRollsMutation>;
export type CreateRollsMutationResult = ApolloReactCommon.MutationResult<CreateRollsMutation>;
export type CreateRollsMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateRollsMutation, CreateRollsMutationVariables>;
export const OnCreateRollsDocument = gql`
    subscription onCreateRolls {
  onUpdateRolls {
    id
    dice
    createdAt
  }
}
    `;

/**
 * __useOnCreateRollsSubscription__
 *
 * To run a query within a React component, call `useOnCreateRollsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateRollsSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateRollsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateRollsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnCreateRollsSubscription, OnCreateRollsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnCreateRollsSubscription, OnCreateRollsSubscriptionVariables>(OnCreateRollsDocument, baseOptions);
      }
export type OnCreateRollsSubscriptionHookResult = ReturnType<typeof useOnCreateRollsSubscription>;
export type OnCreateRollsSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnCreateRollsSubscription>;
export const ListRollsDocument = gql`
    query listRolls {
  listRolls {
    items {
      id
      dice
      createdAt
    }
  }
}
    `;

/**
 * __useListRollsQuery__
 *
 * To run a query within a React component, call `useListRollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListRollsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListRollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListRollsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ListRollsQuery, ListRollsQueryVariables>) {
        return ApolloReactHooks.useQuery<ListRollsQuery, ListRollsQueryVariables>(ListRollsDocument, baseOptions);
      }
export function useListRollsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListRollsQuery, ListRollsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ListRollsQuery, ListRollsQueryVariables>(ListRollsDocument, baseOptions);
        }
export type ListRollsQueryHookResult = ReturnType<typeof useListRollsQuery>;
export type ListRollsLazyQueryHookResult = ReturnType<typeof useListRollsLazyQuery>;
export type ListRollsQueryResult = ApolloReactCommon.QueryResult<ListRollsQuery, ListRollsQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    