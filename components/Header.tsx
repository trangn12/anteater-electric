import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-vintage-navy shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C0PuPoKWI1HiQmIKDRXstoH8qBQaN4.png"
            alt="Anteater Electric Racing Logo"
            width={200}
            height={50}
            className="h-12 w-auto"
          />
        </Link>
        <ul className="flex space-x-6">
          {["home", "about", "team", "subteams", "sponsors", "contact"].map((item) => (
            <li key={item}>
              <Link
                href={item === "home" ? "/" : `/${item.toLowerCase()}`}
                className="text-vintage-white hover:text-vintage-yellow transition-colors font-poppins font-bold"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
