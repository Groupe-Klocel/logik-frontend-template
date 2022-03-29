import { useAuth } from 'context/AuthContext';
import { gql } from 'graphql-request';
import graphqlRequestClient from 'graphql/graphqlRequestClient';
import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const token = req.headers.cookie?.split('token=')[1].split(';')[0];
//     const requestHeader = {
//         // 'X-API-fake': 'fake',
//         // "X-API-seed": "same",
//         authorization: `Bearer ${token}`
//     };

//     const updateVariables = {
//         id: 1700,
//         input: {
//             boxQuantity: Math.floor(Math.random() * 10)
//         }
//     };

//     const updateMutation = gql`
//         mutation updateArticle($id: Int!, $input: UpdateArticleInput!) {
//             updateArticle(id: $id, input: $input) {
//                 boxQuantity
//             }
//         }
//     `;

//     const result = await graphqlRequestClient.request(
//         updateMutation,
//         updateVariables,
//         requestHeader
//     );

//     console.log('hello world');
//     res.status(200).json({ success: 'true' });
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const resetPasswordMutation = gql`
        mutation resetPassword($email: String!, $callbackUrl: String) {
            resetPassword(email: $email, callbackUrl: $callbackUrl) {
                __typename
                ... on ResetPasswordSuccess {
                    message
                }
                ... on ResetPasswordFailure {
                    message
                }
            }
        }
    `;
    const resetVariables = {
        email: 'devphs513@gmail.com',
        callbackUrl: 'demo.stagking.logik.klocel.com/reset-password'
    };

    const result = await graphqlRequestClient.request(resetPasswordMutation, resetVariables);
    res.status(200).json({ success: 'true' });
}
