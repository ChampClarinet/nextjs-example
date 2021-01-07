import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    // console.log('request body is', req.query);
    res.setHeader('X-Custom-Header', 'This is custom header');
    res.setHeader('Set-Cookie', 'programmer?=true')
    res.statusCode = 202;
    res.json({ number: Math.floor(Math.random() * 10) });
}