import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const KEY = 'asdahfgklghknmnghlkh';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.body) {
        res.statusCode = 400;
        res.end('Bad Request, no input');
        return
    }
    const { username, password } = req.body as { username: string, password: string };
    res.json({
        token: jwt.sign({
            username,
            admin: username == 'admin' && password == 'admin'
        }, KEY)
    });
}