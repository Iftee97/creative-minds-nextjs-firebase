import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="mx-6 md:mx-auto md:max-w-2xl font-poppins">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}
