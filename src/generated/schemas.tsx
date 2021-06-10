import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CountriesInterface = {
  __typename?: 'CountriesInterface';
  meta: MetaPaginationInterface;
  items: Array<CountryInterface>;
};

export type CountryInterface = {
  __typename?: 'CountryInterface';
  id: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isoCode?: Maybe<Scalars['String']>;
  languages: Array<Language>;
};

export type Language = {
  __typename?: 'Language';
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type LanguageDto = {
  name: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
};

export type MetaPaginationInterface = {
  __typename?: 'MetaPaginationInterface';
  totalItems: Scalars['Float'];
  itemCount: Scalars['Float'];
  itemsPerPage: Scalars['Float'];
  totalPages: Scalars['Float'];
  currentPage: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  upsertCountry: CountryInterface;
  deleteCountry: Scalars['String'];
};

export type MutationUpsertCountryArgs = {
  upsertCountryDto: UpsertCountryDto;
};

export type MutationDeleteCountryArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCountries: CountriesInterface;
  getCountry: CountryInterface;
};

export type QueryGetCountriesArgs = {
  queryParams: QueryFilterDto;
};

export type QueryGetCountryArgs = {
  id: Scalars['String'];
};

export type QueryFilterDto = {
  page?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
  orderBy?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  q?: Maybe<Scalars['String']>;
};

export type UpsertCountryDto = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  isoCode: Scalars['String'];
  languages: Array<LanguageDto>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export const MetaFragmentFragmentDoc = gql`
  fragment MetaFragment on MetaPaginationInterface {
    totalItems
    itemCount
    itemsPerPage
    totalPages
    currentPage
  }
`;
export const GetCountriesDocument = gql`
  query getCountries($queryParams: QueryFilterDto!) {
    getCountries(queryParams: $queryParams) {
      meta {
        ...MetaFragment
      }
      items {
        id
        createdAt
        updatedAt
        name
        isActive
        isoCode
      }
    }
  }
  ${MetaFragmentFragmentDoc}
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      queryParams: // value for 'queryParams'
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    options,
  );
}
export type GetCountriesQueryHookResult = ReturnType<
  typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
  typeof useGetCountriesLazyQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;
export type MetaFragmentFragment = {
  __typename?: 'MetaPaginationInterface';
} & Pick<
  MetaPaginationInterface,
  'totalItems' | 'itemCount' | 'itemsPerPage' | 'totalPages' | 'currentPage'
>;

export type GetCountriesQueryVariables = Exact<{
  queryParams: QueryFilterDto;
}>;

export type GetCountriesQuery = { __typename?: 'Query' } & {
  getCountries: { __typename?: 'CountriesInterface' } & {
    meta: { __typename?: 'MetaPaginationInterface' } & MetaFragmentFragment;
    items: Array<
      { __typename?: 'CountryInterface' } & Pick<
        CountryInterface,
        'id' | 'createdAt' | 'updatedAt' | 'name' | 'isActive' | 'isoCode'
      >
    >;
  };
};
