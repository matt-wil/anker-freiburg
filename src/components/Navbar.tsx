import LocaleSwitcher from "@/components/LocaleSwitcher"
import NavLinks from "./NavLinks"

const Navbar = (): React.ReactNode => {

  return (
    <header className="flex flex-row justify-between ">
        <LocaleSwitcher />
        <NavLinks />
    </header>
  )
}

export default Navbar