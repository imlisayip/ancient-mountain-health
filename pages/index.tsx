import ImageText from "@/components/ImageText";
import Testimonials from "@/components/Testimonials";
import Layout from "@/components/Layout";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <Layout>
      <ImageText
        url={"/booknow"}
        title={"Ancient Mountain Health"}
        description={
          "Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper."
        }
        cta={"Book Appointment"}
        src={"https://via.placeholder.com/850"}
        alt={""}
      />
      <Testimonials />
    </Layout>
  );
}
