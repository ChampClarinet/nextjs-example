import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = 'asdahfgklghknmnghlkh';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const { token } = req.body;

    const { admin } = jwt.verify(token, KEY) as { [key: string]: boolean };
    return res.json(admin ? { secretAdminCode: 123456 } : { admin: false });
}