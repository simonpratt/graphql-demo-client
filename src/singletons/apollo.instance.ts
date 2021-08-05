import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import environment from '../config/environment';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        meal(_, { args, toReference }) {
          return toReference({
            __typename: 'Meal',
            id: args?.id,
          });
        },
      },
    },
  },
});

const httpLink = createHttpLink({
  uri: `${environment.REACT_APP_GRAPH_URL}/graphql`,
});

const apolloInstance = new ApolloClient({
  link: httpLink,
  cache: cache,
  connectToDevTools: true,
});

export default apolloInstance;
