import { ApolloClient, ApolloLink, from } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import * as Sentry from '@sentry/react';
import { onError } from 'apollo-link-error';
import { cache } from './cache';
import { getToken } from '#/shared/utils/token';

const httpLink = new HttpLink({ uri: import.meta.env.VITE_BASE_URL });

const withToken = setContext(async () => {
  const token = await getToken();
  return { token };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { headers, token } = operation.getContext();
  operation.setContext({
    headers: {
      ...headers,
      ...(token && {
        authorization: `Bearer ${token}`,
      }),
    },
  });
  return forward(operation);
});

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      if ((extensions as Record<string, string>).code !== 'BAD_USER_INPUT') {
        Sentry.captureMessage(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        );
      }
    });
  }
  if (networkError && 'statusCode' in networkError) {
    Sentry.captureException(networkError);
  }
}) as unknown as ApolloLink;

export const client = new ApolloClient({
  cache,
  link: from([withToken, authMiddleware, errorHandler, httpLink]),
  defaultOptions: {
    watchQuery: {
      notifyOnNetworkStatusChange: true,
    },
  },
  connectToDevTools: !import.meta.env.VITE_NODE_ENV,
});
