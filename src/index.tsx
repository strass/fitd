import React from "react";
import ReactDOM from "react-dom";
import { createAuthLink, AUTH_TYPE } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";
import { UrlInfo } from "aws-appsync-subscription-link/lib/types";

if (!process.env.REACT_APP_API_KEY) {
  throw new Error("Pass API Key through REACT_APP_API_KEY");
}

const url =
  "https://ncmtninmmbhvfk36ayqgal6hke.appsync-api.us-east-1.amazonaws.com/graphql";
const region = "us-east-1";
const auth = {
  type: AUTH_TYPE["API_KEY"] as "API_KEY",
  apiKey: process.env.REACT_APP_API_KEY
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({
    url,
    region,
    auth
  }),
  createSubscriptionHandshakeLink(
    {
      url,
      region,
      auth
    } as UrlInfo,
    httpLink
  )
]);

const client = new ApolloClient({
  link,
  connectToDevTools: true,
  cache: new InMemoryCache()
});

console.log(client);

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
