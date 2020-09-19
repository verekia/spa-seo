import wait from '@sharyn/util.wait'
import { NextApiRequest as Req, NextApiResponse as Res } from 'next'


export default async (req: Req, res: Res) => {
  await wait(Number(req.query.duration))
  res.status(200).json({ data: 'ok' })
}
