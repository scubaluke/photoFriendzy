import { faker } from '@faker-js/faker';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

interface DownloadUrlResponse {
  downloadUrl?: string;
  fileName?: string;
  message?: string;
}

export default async function downloadImage(
  req: NextApiRequest,
  res: NextApiResponse<DownloadUrlResponse>
) {
  try {
    const srcUrl = String(req.query.srcUrl);
    const response = await axios({
      url: srcUrl,
      method: 'GET',
      responseType: 'stream', // important
    });

    const downloadUrl = response.data.responseUrl;
    const fileName = `${faker.word.adjective()}-${faker.word.noun()}.jpeg`;

    res.status(200).json({ downloadUrl, fileName });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred, please try again.' });
  }
}
