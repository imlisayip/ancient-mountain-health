import Image from "next/image";
import Link from "next/link";

interface ImageText {
  title: string;
  description: string;
  cta?: string;
  url?: string;
  src: string;
  alt: string;
}

export default function ImageText({
  url,
  title,
  description,
  cta,
  src,
  alt,
}: ImageText) {
  return (
    <>
      <div className="block md:hidden">
        <img src={src} alt={alt} max-width="100%" height="auto" />
      </div>
      <div className="wrapper">
        <div className="flex flex-col gap-8 md:items-center md:flex-row-reverse">
          <div className="hidden md:block md:basis-1/2 overflow-hidden">
            <img src={src} alt={alt} max-width="100%" height="auto" />
            {/* <Image src={src} alt={alt} />/ */}
          </div>
          <div className="md:basis-1/2">
            <h2>{title}</h2>
            <p>{description}</p>
            {url && cta && (
              <Link href={url}>
                <button className="cta">{cta}</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
