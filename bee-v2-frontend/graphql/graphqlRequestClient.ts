import { GraphQLClient } from 'graphql-request'
import { cookie } from 'helpers/utils/utils'

const token = cookie.get('token') ? cookie.get('token') : "HOOOO BOY"

const requestHeader = {
	authorization: `Bearer ${token}`,
};

const graphqlRequestClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
	headers: requestHeader,
});

export default graphqlRequestClient;