import { cookie } from '@helpers';
import { GraphQLClient } from 'graphql-request';

const token = cookie.get('token') ? cookie.get('token') : 'HOOOO BOY';

const requestHeader = {
    authorization: `Bearer ${token}`
};

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
    headers: requestHeader
});

export default graphqlRequestClient;
