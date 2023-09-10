import type { NextApiRequest, NextApiResponse } from 'next';
import { Twilio } from 'twilio';

type uris = Array<string>;
type imageResponse = {
  uris: uris;
  message?: string;
};

export default async function images(
  req: NextApiRequest,
  res: NextApiResponse<imageResponse>
) {
  try {
    const {
      TWILIO_ACCOUNT_SID: accountSid,
      TWILIO_ACCOUNT_SID: authToken,
      TWILIO_NUMBER: twilioNumber,
    } = process.env;

    const client = new Twilio(accountSid, authToken);

    const response = await client.messages.list({
      limit: 20,
      to: twilioNumber,
    });

    const mediaUris: uris = [];
    for (const { sid } of response) {
      const media = await client.messages(sid).media.list();
      media.forEach(({ uri }) => mediaUris.push(uri.replace('.json', '')));
    }

    res.status(200).json({ uris: mediaUris });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'internal server error', uris: [] });
  }
}
