import LocaleSwitcher from "@/components/LocaleSwitcher"
import NavLinks from "./NavLinks"

const Navbar = (): React.ReactNode => {

  return (
    <header className="flex flex-row justify-between mt-8 mx-8">
        <LocaleSwitcher />
        <NavLinks />
    </header>
  )
}

export default Navbar