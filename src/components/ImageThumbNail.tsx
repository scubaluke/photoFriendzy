import Image from 'next/image';

export function ImageThumbNail({
  srcUrl,
  alt = `Photo from Luke and Bre's wedding!`,
}: {
  srcUrl: string;
  alt?: string;
}) {
  return <Image src={srcUrl} width={500} height={500} alt={alt} />;
}
