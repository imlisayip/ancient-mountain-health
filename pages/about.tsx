import ImageText from "@/components/ImageText";
import Layout from "@/components/Layout";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <Layout>
      <section className="component overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold md:text-3xl">Noah Gallinger</h2>
            <p>
              Noah Gallinger is a Licensed Massage and Bodywork Therapist LMBT
              #203330 and a Licensed Acupuncturist LAc # 2165.
            </p>
            <p>
              At Ancient Mountain Health, we strive to improve your well-being
              and meet your health goals by combining Eastern and Western
              medical practices for a holistic approach to your life journey.
            </p>
            <p>
              Noah is a Western North Carolina native and graduate of Smoky
              Mountain High School. He received his Associates of Applied
              Science in Radiography from Southwestern Community College and
              worked as a Radiographic Technologist for 5 years. Contuniing his
              education, Noah graduated from both the Massage Therapy program at
              Southwestern Community College and from Jung Tao’s Chinese
              Medicine program in 2022.
            </p>
          </div>
        </div>

        <img
          alt="photo of Noah"
          src="/noah.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
        />
      </section>
    </Layout>
  );
}
