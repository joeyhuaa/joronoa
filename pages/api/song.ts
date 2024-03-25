import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  artist: string
}

const getAccessToken = async () => { 
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", { //! socket disconnect error
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export default async function handler(
  // songId='4ezeJXc8ToDbkZ3FATHsD4',
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { access_token } = await getAccessToken();
  const result = await fetch(`https://api.spotify.com/v1/${songId}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(result)
  res.status(200).json({ artist: 'joronoa' });
};