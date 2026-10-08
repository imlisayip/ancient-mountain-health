import Footer from "./Footer";
import Navbar from "./Navbar";
import { Sora } from "next/font/google";
import Head from "next/head";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

interface LayoutProps {
  children: any;
  title?: string;
  description?: string;
  path?: string;
}

const SITE_NAME = "Ancient Mountain Health";
const SITE_URL = "https://www.ancientmountainhealth.com";
const DEFAULT_DESCRIPTION =
  "Acupuncture, cupping, and Gua Sha therapy in Western North Carolina. Ancient Mountain Health combines Eastern and Western medicine for a holistic approach to pain relief and well-being.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/mountains.jpg`,
  logo: `${SITE_URL}/logo.svg`,
  telephone: "+12183828786",
  email: "noah@ancientmountainhealth.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "540 Dellwood City Rd",
    addressLocality: "Waynesville",
    addressRegion: "NC",
    postalCode: "28786",
    addressCountry: "US",
  },
  sameAs: ["https://www.instagram.com/ancientmountainhealth/"],
  medicalSpecialty: "Acupuncture",
};

export default function Layout({
  children,
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}: LayoutProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${SITE_URL}/mountains.jpg`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/mountains.jpg`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className={`${sora.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
