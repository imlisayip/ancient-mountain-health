import Footer from "./Footer";
import Navbar from "./Navbar";
import { Sora } from "@next/font/google";
import Head from "next/head";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

interface LayoutProps {
  children: any;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Ancient Mountain Health</title>
        <meta
          name="description"
          content="Generated by Ancient Mountain Health"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main className={`${sora.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
}
