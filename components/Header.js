import logo from "../public/logo.svg"
import Image from "next/dist/client/image"

export default function Header() {
  return (
    <header className="flex items-center justify-center p-11 md:p-10">
      <Image src={logo} alt="" />
    </header>
  )
}
