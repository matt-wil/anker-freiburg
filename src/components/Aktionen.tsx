import { getAktionen } from "@/lib/cloudinary"
import ImageCard from "@/components/ImageCard"

const Aktionen = async (): Promise<React.JSX.Element> => {
    const {resources} = await getAktionen("Aktionen")
    console.log(resources)
  
  
    return (
        <section className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          {resources.map((r) => (
            <div key={r.public_id}>
              <ImageCard
                src={r.secure_url} 
                alt="Image von Aktionen beim Anker Tattoo und Piercing in Freiburg"
                width={400}
                height={600}
                className="border-2 border-white/20 rounded-xl"
                />
            </div>
          ))}
        </section>
    )
}

export default Aktionen