import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 p-10">
      <div className="flex gap-5">
        <span className="p-2 rounded-full cursor-pointer text-blue hover:text-white hover:bg-blue">
          <FaFacebookF />
        </span>
        <span className="p-2 rounded-full cursor-pointer text-blue hover:text-white hover:bg-blue">
          <FaTwitter />
        </span>
        <span className="p-2 rounded-full cursor-pointer text-blue hover:text-white hover:bg-blue">
          <FaInstagram />
        </span>
      </div>
      <p className="font-light text-gray">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  )
}
