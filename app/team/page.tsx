import Image from "next/image"
import Link from "next/link"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

const subteams = [
  {
    name: "Suspension",
    logo: "/placeholder.svg?height=170&width=170&text=Suspension+Logo",
    lead: {
      name: "Jane Doe",
      role: "Suspension Lead",
      image: "/placeholder.svg?height=300&width=300&text=Jane+Doe",
      linkedin: "https://www.linkedin.com/in/janedoe",
    },
    members: [
      {
        name: "John Smith",
        role: "Suspension Engineer",
        image: "/placeholder.svg?height=300&width=300&text=John+Smith",
        linkedin: "https://www.linkedin.com/in/johnsmith",
      },
      {
        name: "Emily Johnson",
        role: "Suspension Analyst",
        image: "/placeholder.svg?height=300&width=300&text=Emily+Johnson",
        linkedin: "https://www.linkedin.com/in/emilyjohnson",
      },
    ],
  },
  {
    name: "Drivetrain",
    logo: "/placeholder.svg?height=170&width=170&text=Drivetrain+Logo",
    lead: {
      name: "Michael Brown",
      role: "Drivetrain Lead",
      image: "/placeholder.svg?height=300&width=300&text=Michael+Brown",
      linkedin: "https://www.linkedin.com/in/michaelbrown",
    },
    members: [
      {
        name: "Sarah Lee",
        role: "Powertrain Engineer",
        image: "/placeholder.svg?height=300&width=300&text=Sarah+Lee",
        linkedin: "https://www.linkedin.com/in/sarahlee",
      },
      {
        name: "David Wang",
        role: "Electric Motor Specialist",
        image: "/placeholder.svg?height=300&width=300&text=David+Wang",
        linkedin: "https://www.linkedin.com/in/davidwang",
      },
    ],
  },
  {
    name: "Aero",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvSHkyLp2izXbI4uEOrbpLqiUweStl.png",
    logoPosition: "0 0 341 341",
    lead: {
      name: "Alex Johnson",
      role: "Aero Lead",
      image: "/placeholder.svg?height=300&width=300&text=Alex+Johnson",
      linkedin: "https://www.linkedin.com/in/alexjohnson",
    },
    members: [
      {
        name: "Emma Davis",
        role: "CFD Engineer",
        image: "/placeholder.svg?height=300&width=300&text=Emma+Davis",
        linkedin: "https://www.linkedin.com/in/emmadavis",
      },
    ],
  },
  {
    name: "Chassis",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvSHkyLp2izXbI4uEOrbpLqiUweStl.png",
    logoPosition: "341 0 682 341",
    lead: {
      name: "Chris Wilson",
      role: "Chassis Lead",
      image: "/placeholder.svg?height=300&width=300&text=Chris+Wilson",
      linkedin: "https://www.linkedin.com/in/chriswilson",
    },
    members: [
      {
        name: "Tom Harris",
        role: "Structural Engineer",
        image: "/placeholder.svg?height=300&width=300&text=Tom+Harris",
        linkedin: "https://www.linkedin.com/in/tomharris",
      },
    ],
  },
  {
    name: "Electrical",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EvSHkyLp2izXbI4uEOrbpLqiUweStl.png",
    logoPosition: "682 0 1023 341",
    lead: {
      name: "Lisa Chen",
      role: "Electrical Lead",
      image: "/placeholder.svg?height=300&width=300&text=Lisa+Chen",
      linkedin: "https://www.linkedin.com/in/lisachen",
    },
    members: [
      {
        name: "Mark Thompson",
        role: "Power Systems Engineer",
        image: "/placeholder.svg?height=300&width=300&text=Mark+Thompson",
        linkedin: "https://www.linkedin.com/in/markthompson",
      },
    ],
  },
]

function MemberCard({ name, role, image, linkedin }) {
  return (
    <Link href={linkedin} target="_blank" rel="noopener noreferrer" className="group">
      <div className="bg-vintage-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105 vintage-box-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-opacity group-hover:opacity-80"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-vintage-navy">{name}</h3>
          <p className="text-sm text-vintage-orange">{role}</p>
        </div>
      </div>
    </Link>
  )
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-4xl font-bold text-center mb-12">OUR TEAM</h1>
            {subteams.map((subteam) => (
              <div key={subteam.name} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-32 h-32">
                    {subteam.logoPosition ? (
                      <Image
                        src={subteam.logo || "/placeholder.svg"}
                        alt={`${subteam.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <Image
                        src={subteam.logo || "/placeholder.svg"}
                        alt={`${subteam.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    )}
                  </div>
                  <h2 className="section-title text-3xl font-bold">{subteam.name.toUpperCase()} TEAM</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <MemberCard {...subteam.lead} />
                  {subteam.members.map((member) => (
                    <MemberCard key={member.name} {...member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
