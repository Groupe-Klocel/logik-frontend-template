import { gql, GraphQLClient } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

interface IData {
    width: number;
    height: number;
    length: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.headers.cookie?.split('token=')[1].split(';')[0];
    const requestHeader = {
        // 'X-API-fake': 'fake',
        // "X-API-seed": "same",
        authorization: `Bearer ${token}`
    };
    const graphqlRequestClient = new GraphQLClient(
        process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
        {
            headers: requestHeader
        }
    );

    const { id } = req.query;

    const query = gql`
        query getArticleById($id: Int!) {
            article(id: $id) {
                width
                height
                length
            }
        }
    `;

    const variables = {
        id: parseInt(id.toString())
    };

    const data = await graphqlRequestClient.request(query, variables, requestHeader);
    const qnt = calculateBoxQuantity(data.article);
    console.log('quantity=', qnt);

    // update box quantity in database by sending gql mutaion.
    // implement after gql endpoint done!
    const updateVariables = {
        id: parseInt(id.toString()),
        input: {
            boxQuantity: qnt
        }
    };

    const updateMutation = gql`
        mutation updateArticle($id: Int!, $input: UpdateArticleInput!) {
            updateArticle(id: $id, input: $input) {
                boxQuantity
            }
        }
    `;

    const result = await graphqlRequestClient.request(
        updateMutation,
        updateVariables,
        requestHeader
    );

    res.status(200).json({ quantity: result.updateArticle.boxQuantity });
};

function calculateBoxQuantity({ width, height, length }: IData) {
    const articleVolume = (width * height * length) / 100 ** 3; // cubic centimeters to cubic meters
    if (articleVolume == 0) return 0;
    const boxVolume = (600 * 400 * 400) / 1000 ** 3; // cubic millimeters to cubic meters
    return Math.floor(boxVolume / articleVolume);
}
