import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center justify-between h-screen font-libreFranklin">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
