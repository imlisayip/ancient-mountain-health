import Layout from "@/components/Layout";

interface ContactProps {}

export default function Contact({}: ContactProps) {
  return (
    <Layout
      title="Contact"
      description="Get in touch with Ancient Mountain Health to schedule an appointment or ask a question."
      path="/contact"
    >
      <h1 className="text-2xl font-bold md:text-3xl">Contact</h1>
    </Layout>
  );
}
