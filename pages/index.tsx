import Head from "next/head";
import Image from "next/image";

import { Sora } from "@next/font/google";
import Layout from "@/components/Layout";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <p>
            Get started by editing&nbsp;
            <code>pages/index.tsx</code>
          </p>
        </div>
      </Layout>
    </>
  );
}
