import ImageText from "@/components/ImageText";
import Layout from "@/components/Layout";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <Layout>
      <div className="component">
        <ImageText
          url={"/booknow"}
          title={"Ancient Mountain Health"}
          description={
            "Get personalized care for your health journey. Book your appointment with our expert professional today and start feeling your best. Invest in your well-being and take the first step towards improved health."
          }
          cta={"Book Appointment"}
          src={"/mountains.jpg"}
          alt={"funchun mountains"}
        />
      </div>
      <div className="wrapper">
        <p>
          Chinese medicine consists of multiple modalities including acupuncture
          which is the insertion of small filiform needles into the body. In
          addition to acupunture Noah utilizes cupping and Gua Sha therapy.
          Cupping is done with silicone cups and creates decompression of the
          superficial tissues and is best for workout recovery and some mild
          muscular soreness. Gua Sha, also known as Instrument Assisted Massage,
          is a technique aimed at deeper more chronic muscle pain and is better
          suited to those who like deep tissue massage.
        </p>
        <p>
          Ancient Mountain Health operates on a sliding scale payment schedule
          for acupuncture treatments. The suggested range should be a guide for
          patients when deciding how to budget an effective treatment plan.
          While some conditions can be resolved in a single treament, it is more
          common to require more frequent visits intitally, before gradually
          tapering off with resolution.
        </p>
        <br />
        <br />
        <h5> Chinese medicine and massage can be beneficial in treating:</h5>
        <div className="grid md:grid-rows-6 md:grid-flow-col gap-2 pt-4">
          <span>Low Back Pain</span>
          <span>Sciatica</span>
          <span>Neck Pain</span>
          <span>Hip Pain / Arthritis</span>
          <span>Peripheral Neuropathy</span>
          <span>Insomnia</span>
          <span>Anxiety / PTSD</span>
          <span>Irritable Bowel Syndrome / Crohn’s</span>
          <span>Shoulder Pain / Rotator Cuff Pain</span>
          <span>Depression</span>
          <span>Bell’s Palsey</span>
          <span>Knee Pain / Arthritis</span>
          <span>Tennis Elbow / Tendonitis</span>
          <span>Musculoskeletal Pain</span>
          <span>Osteoarthritis</span>
          <span>Carpal Tunnel Syndrome</span>
          <span>Thoracic Outlet Syndrome</span>
          <span>Many many more</span>
        </div>
      </div>
    </Layout>
  );
}
