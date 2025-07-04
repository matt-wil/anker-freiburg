import Language from "@/components/Language"
import NavLinks from "./NavLinks"

const Navbar = (): React.ReactNode => {

  return (
    <header className="flex flex-row justify-between ">
        <Language />
        <NavLinks />
    </header>
  )
}

export default Navbar