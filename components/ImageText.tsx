/* eslint-disable @next/next/no-img-element */
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
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
            <p>{description}</p>
            <div className="mt-4 md:mt-8">
              <a
                href={url}
                className="mt-8 inline-flex items-center rounded border px-8 py-3 text-white focus:outline-none focus:ring transition-colors duration-200 bg-primary border-primary hover:bg-transparent hover:text-primary"
              >
                <span className="text-sm font-medium">{cta}</span>
                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Image
          alt={alt}
          src={src}
          width={800}
          height={600}
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
}
