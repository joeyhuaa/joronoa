import type { NextApiRequest, NextApiResponse } from 'next'
import queryString from 'query-string'

type Data = {
  route: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await fetch('https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      redirect_uri: 'http://localhost:3000', //! make dynamic
      // state: state
    })
  );

  console.log(result)


  res.status(200).json({ route: process.env.SPOTIFY_CLIENT_ID })
}