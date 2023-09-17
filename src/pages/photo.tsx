import Image from 'next/image';
import { useRouter } from 'next/router';

import useDownloader from 'react-use-downloader';

export default function Photo() {
  const router = useRouter();
  const { srcUrl, alt, from, accountSid, sid } = router.query as Record<
    string,
    string
  >;

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  //const fileUrl =
  //('https://s3-external-1.amazonaws.com/media.twiliocdn.com/AC41f9eb05cc84049fbc026ca91b527a81/bd9ecdbac1f9c726cd91dd44a8a0082e');
  const fileUrl = `https://s3-external-1.amazonaws.com/media.twiliocdn.com/${accountSid}/${sid}`;
  // const fileUrl = srcUrl;
  // const account = srcUrl.split('Accounts');
  const filename = 'beautiful-carpathia.jpg';

  return (
    <>
      <Image
        src={srcUrl}
        width={500}
        height={500}
        alt={alt}
        layout='responsive'
        placeholder='blur'
        blurDataURL='data:image/webp;base64,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'
        quality={100}
      />
      <button onClick={() => download(fileUrl, filename)}>
        Click to download image
      </button>
      <a href='house.png' download={srcUrl}>
        Download image
      </a>

      <h4>{alt}</h4>
    </>
  );
}
