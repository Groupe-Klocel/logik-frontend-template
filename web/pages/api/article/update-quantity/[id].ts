import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request';

interface IData{
  width: number,
  height: number,
  length: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let token = req.headers.cookie?.split('token=')[1].split(';')[0];
  let requestHeader = {
    "X-API-fake": "fake",
    // "X-API-seed": "same",
    "authorization": `Bearer ${token}`
  };
  const graphqlRequestClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
    {
      headers: requestHeader
    }
  );
  
  const { id } = req.query;
  console.log(id);
  const query = gql`
    query getArticleById($id: Int!) {
      article(id: $id) {
        width,
        height,
        length
      }
    }
  `

  const variables = {
    id: parseInt(id.toString()),
  }

  const data = await graphqlRequestClient.request(query, variables, requestHeader);
  console.log(data);
  const qnt = calculateBoxQuantity(data.article)

  // update box quantity in database by sending gql mutaion.
  // implement after gql endpoint done!

  res.status(200).json({ quantity: qnt });
}

function calculateBoxQuantity({width, height, length}: IData) {
  const volume = width * height * length;
  const boxVolume = 600*400*400;
  return Math.floor(boxVolume / volume);
}