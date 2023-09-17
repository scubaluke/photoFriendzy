import type { NextApiRequest, NextApiResponse } from 'next';
import { Twilio } from 'twilio';

type Images = Array<Record<string, string>>;
interface imageResponse {
  images?: Images;
  message?: string;
}

export default async function images(
  req: NextApiRequest,
  res: NextApiResponse<imageResponse>
) {
  try {
    const limit = Number(req.query.limit);
    const {
      TWILIO_ACCOUNT_SID: accountSid,
      TWILIO_AUTH_TOKEN: authToken,
      TWILIO_NUMBER: twilioNumber,
    } = process.env;

    const client = new Twilio(accountSid, authToken);

    const response = await client.messages.list({
      limit,
      to: twilioNumber,
    });

    const images: Images = [];
    for (const { sid, body: message, from, accountSid } of response) {
      const media = await client.messages(sid).media.list();
      media.forEach(({ uri }) =>
        images.push({
          url: uri.replace('.json', ''),
          message,
          from,
          sid,
          accountSid,
        })
      );
    }

    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({
      message:
        'We have encountered an issue when loading photos, please reload or try again later.',
    });
  }
}
