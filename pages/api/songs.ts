import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

// initialize s3 client
const s3Client = new S3Client({ 
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  }
});

type Data = any[];

function getSongName(songKey) {
  const songName = songKey.split('/').pop()
  return songName
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let input = {
    Bucket: 'supertonic',
    Prefix: 'songs for my site/',
    Delimiter: '/',
    ContinuationToken: null
  }

  let objects = [];
  let isTruncated = true;
  let marker;

  while (isTruncated) {
    if (marker) input.ContinuationToken = marker;
    const response = await s3Client.send(new ListObjectsV2Command(input));
    
    // Collect all the objects
    if (response.Contents) {
      for (const content of response.Contents) {
        const command = new GetObjectCommand({
          Bucket: 'supertonic',
          Key: content.Key
        })
        const url = await getSignedUrl(
          s3Client,
          command,
          { expiresIn: 3600 } // URL expires in 1 hour
        );
        objects.push({ 
          ...content, 
          url,
          name: getSongName(content.Key)
        });
      }
    }

    marker = response.NextContinuationToken;
    isTruncated = response.IsTruncated;
  }

  res.status(200).json(objects)
}