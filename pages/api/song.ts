import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

type Data = {
  name: string,
  // duration: string,
  filetype: string,
  url: string,
}

// initialize s3 client
const s3Client = new S3Client({ 
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  }
});

export default async function handler(
  // songId='4ezeJXc8ToDbkZ3FATHsD4',
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('/api/song handler func')

  //
  const input = {
    Bucket: 'supertonic',
    Key: '03yxafzpxbcfz7b555fe69d36t3d' //send in as prop
  }
  const command = new GetObjectCommand(input)
  const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  const data = {
    name: 'Rhodey',
    // duration: '9000',
    filetype: 'mp3',
    url: url
  }

  res.status(200).json(data)
}