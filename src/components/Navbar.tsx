import LocaleSwitcher from "@/components/LocaleSwitcher"
import NavLinks from "./NavLinks"

const Navbar = (): React.ReactNode => {

  return (
    <header className="flex flex-row justify-between mx-2 mt-2 sticky top-0 z-9999">
        <LocaleSwitcher />
        <NavLinks />
    </header>
  )
}

export default Navbar