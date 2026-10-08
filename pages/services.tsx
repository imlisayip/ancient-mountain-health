import Layout from "@/components/Layout";

interface ServicesProps {}

export default function Services({}: ServicesProps) {
  return (
    <Layout
      title="Services"
      description="Explore acupuncture, cupping, and Gua Sha therapy services offered at Ancient Mountain Health."
      path="/services"
    >
      <h1 className="text-2xl font-bold md:text-3xl">Services</h1>
    </Layout>
  );
}
