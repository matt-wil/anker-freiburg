import ImageCard from "@/components/ImageCard";
import type { R2Asset } from "@/types";

const Aktionen = ({
  resources,
}: {
  resources: R2Asset[];
}): React.JSX.Element => {
  return (
    <section className="flex flex-col sm:flex-row justify-center items-center gap-4 m-4">
      {resources.map((r) => (
        <div key={r.key}>
          <ImageCard
            src={r.url}
            alt="Image von Aktionen beim Anker Tattoo und Piercing in Freiburg"
            width={400}
            height={600}
            className="border-2 border-white/20 rounded-xl"
          />
        </div>
      ))}
    </section>
  );
};

export default Aktionen;
