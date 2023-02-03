interface Testimonials {}

export default function Testimonials({}: Testimonials) {
  return (
    <div className="wrapper">
      <h2>Testimonials</h2>
      <div className="flex flex-col gap-8 py-4 md:flex-row md:justify-around ">
        <Testimonial
          qoute="I've never felt so relaxed and rejuvenated after a massage. It was
        truly a transformative experience."
          author="Lisa"
        />
        <Testimonial
          qoute="I was in so much pain before my massage, but now I feel like a new
            person. Noah was incredibly skilled and really listened to my
            needs."
          author="Nate"
        />
        <Testimonial
          qoute="I've had massages before, but this was truly a standout experience.
            The atmosphere was serene and peaceful, and the therapist was able
            to work out all my knots. I'll definitely be back!"
          author="Cynthia"
        />
      </div>
    </div>
  );
}

interface Testimonial {
  qoute: string;
  author: string;
}

function Testimonial({ qoute, author }: Testimonial) {
  return (
    <div className="basis-1/3 relative">
      <p className="pb-8">{qoute}</p>
      <p className="absolute bottom-0 right-0">- {author}</p>
    </div>
  );
}
