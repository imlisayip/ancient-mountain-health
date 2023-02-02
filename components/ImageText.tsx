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
    <div className="wrapper">
      <div className="flex flex-col gap-8 md:items-center md:flex-row-reverse">
        <div className="md:basis-1/2">
          <img src={src} alt={alt} />
        </div>
        <div className="md:basis-1/2">
          <h2>{title}</h2>
          <div className="py-4">{description}</div>
          {url && cta && (
            <Link href={url}>
              <button className="cta">{cta}</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
