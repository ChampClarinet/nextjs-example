import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    res.json({ number: Math.floor(Math.random() * 10) });
}