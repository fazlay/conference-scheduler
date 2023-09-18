import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://api.react-finland.fi/graphql",
  cache: new InMemoryCache(),
});

export default client;