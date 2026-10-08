import Acuity from "@/components/Acuity";
import Layout from "@/components/Layout";

interface BookNowProps {}

export default function BookNow({}: BookNowProps) {
  return (
    <Layout
      title="Book Now"
      description="Schedule your acupuncture, cupping, or Gua Sha appointment with Ancient Mountain Health online."
      path="/booknow"
    >
      <h1 className="text-2xl font-bold md:text-3xl px-8 pt-8 md:px-12 md:pt-12">
        Book Now
      </h1>
      <Acuity />
    </Layout>
  );
}
