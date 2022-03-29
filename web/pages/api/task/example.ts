import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('hello world');
    const api_key = process.env.API_SECRET_KEY;
    console.log('apikey=', api_key);
    try {
        console.log(req.headers);
        const secret_key = req.headers.secret_key;
        console.log('secret_key=', secret_key);
        if (secret_key === api_key) {
            // Process the POST request
            res.status(200).json({ success: 'true' });
        } else {
            res.status(401).json({ message: 'unauthorized user' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
}
