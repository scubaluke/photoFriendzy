import Image from 'next/image';
import { useRouter } from 'next/router';

import useDownloader from 'react-use-downloader';

export default function Photo() {
  const router = useRouter();
  const { srcUrl, alt, from } = router.query as Record<string, string>;

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = srcUrl;
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
        blurDataURL={srcUrl}
        quality={100}
      />
      <button onClick={() => download(fileUrl, filename)}>
        Click to download image
      </button>
      <h4>{alt}</h4>
    </>
  );
}
