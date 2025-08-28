import testimonials from "@/lib/testimonials.json";
import type { Testimonial } from "@/types";

export default function Testimonials() {
  return (
    <section className="min-h-screen w-full mt-8 px-4 text-white">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12">
        Our Happy Customers
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial: Testimonial) => (
          <div
            key={testimonial.id}
            className="w-full sm:w-[300px] flex flex-col justify-center items-center bg-gray-900 p-6 rounded-2xl shadow-2xl border-2 border-white/20 space-y-2"
          >
            <h2 className="font-bold text-xl text-white">{testimonial.name}</h2>
            <span className="text-yellow-400">{testimonial.stars}</span>
            <span className="text-gray-400">{testimonial.date}</span>
            <p className="text-sm text-white">{testimonial.review}</p>
            <a
              className="text-blue-300 underline"
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              review
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
