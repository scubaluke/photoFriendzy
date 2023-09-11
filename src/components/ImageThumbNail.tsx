import Image from 'next/image';
import Link from 'next/link';

export function ImageThumbNail({
  srcUrl,
  alt = `Photo from Luke and Bre's wedding!`,
  from,
}: {
  srcUrl: string;
  alt: string;
  from: string;
}) {
  return (
    <Link
      href={{
        pathname: '/photo',
        query: {
          srcUrl,
          alt,
          from,
        },
      }}
    >
      <Image
        src={srcUrl}
        width={500}
        height={500}
        alt={alt}
        layout='responsive'
        placeholder='blur'
        blurDataURL={srcUrl}
        quality={10}
      />
    </Link>
  );
}
