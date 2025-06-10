import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const subteams = [
  {
    name: "Accumulator",
    logo: "/subteam-logos/accumulator_patch.png",
    lead: {
      name: "Camryn Wright",
      role: "Chief Engineer",
      image: "/headshots/camryn_wright.jpg",
      linkedin: "http://www.linkedin.com/in/camryn-wright/",
    },
    members: [
      {
        name: "Dylan Michaelis",
        role: "Project Manager",
        image: "/headshots/dylan_michaelis.jpg",
        linkedin: "https://www.linkedin.com/in/dylanjmichaelis/",
      },
      // {
      //   name: "name",
      //   role: "role",
      //   image: "/placeholder.svg?height=300&width=300&text=David+Wang",
      //   linkedin: "https://www.linkedin.com/in/davidwang",
      // },
    ],
  },
  {
    name: "Aerodynamics",
    logo: "/subteam-logos/aero_patch.png",
    lead: {
      name: "Adityan Vairavel",
      role: "Aerodynamics Lead",
      image: "/headshots/adityan_vairavel.jpg",
      linkedin: "https://www.linkedin.com/in/adityan-v/",
    },
    members: [
      {
        name: "Manav Anand",
        role: "Senior Aerobody Engineer",
        image: "/headshots/manav_anand.jpg",
        linkedin: "https://www.linkedin.com/in/manand222/",
      },
      {
        name: "Sergei Litovchenko",
        role: "Lead Aerodynamics Engineer",
        image: "/headshots/sergei_litovchenko.jpg",
        linkedin: "https://www.linkedin.com/in/sergeil/",
      },
    ],
  },
  {
    name: "Chassis",
    logo: "/subteam-logos/chassis_patch.png",
    lead: {
      name: "Tobey Wong",
      role: "Chassis Lead",
      image: "/headshots/tobey_wong.jpg",
      linkedin: "https://www.linkedin.com/in/michaelbrown",
    },
    members: [
      {
        name: "Andrew Chao",
        role: "Chassis Lead",
        image: "/headshots/andrew_chao.jpg",
        linkedin: "https://www.linkedin.com/in/andrewychao/",
      },
      // {
      //   name: "David Wang",
      //   role: "Electric Motor Specialist",
      //   image: "/placeholder.svg?height=300&width=300&text=David+Wang",
      //   linkedin: "https://www.linkedin.com/in/davidwang",
      // },
    ],
  },
  {
    name: "Electronics",
    logo: "/subteam-logos/electronics_patch.png",
    lead: {
      name: "Esmeralda Guerra Rangel",
      role: "Chief Electrical Engineer",
      image: "/headshots/esmeralda_rangel.jpg",
      linkedin:
        "https://www.linkedin.com/in/esmeralda-guerra-rangel-b2133a1b7/",
    },
    members: [
      {
        name: "Kristian Okimura",
        role: "Electronics Lead",
        image: "/headshots/kristian_okimura.jpg",
        linkedin: "https://www.linkedin.com/in/kristianokimura/",
      },
      {
        name: "Gabriel Schoene",
        role: "Lead Electrical Engineer",
        image: "/headshots/gabriel_schoene.jpg",
        linkedin: "https://www.linkedin.com/in/michaelbrown",
      },
    ],
  },
  {
    name: "Embedded",
    logo: "/subteam-logos/embedded_patch.png",
    lead: {
      name: "Bill Yuan",
      role: "Chief Electrical Engineer",
      image: "/headshots/bill_yuan.jpg",
      linkedin: "https://www.linkedin.com/in/bill-yuan/",
    },
    members: [
      {
        name: "Alistair Keiller",
        role: "Embedded Lead",
        image: "/headshots/alistair_keiller.jpg",
        linkedin: "https://www.linkedin.com/in/akeiller/",
      },
    ],
  },
  {
    name: "Ergonomics",
    logo: "/subteam-logos/ergo_patch.png",
    lead: {
      name: "Ethan Macias",
      role: "Ergonomics Lead",
      image: "/headshots/ethan_macias.jpg",
      linkedin: "https://www.linkedin.com/in/ethan-macias-5b47112b1/",
    },
    members: [
      {
        name: "Athena E. Wong",
        role: "Ergonomics Lead",
        image: "/headshots/athena_wong.jpg",
        linkedin: "https://www.linkedin.com/in/athena-wong-100percent/",
      },
    ],
  },
  {
    name: "Operations and Outreach",
    logo: "/subteam-logos/o2_patch.png",
    lead: {
      name: "Melanie Nguyen",
      role: "Operations and Outreach Lead",
      image: "/headshots/melanie_nguyen.jpg",
      linkedin: "https://www.linkedin.com/in/melanie-nguyen25/",
    },
    members: [
      {
        name: "Nuha Khan",
        role: "Operations and Outreach Lead",
        image: "/headshots/nuha_khan.jpg",
        linkedin: "https://www.linkedin.com/in/nuhakhan24/",
      },
    ],
  },
  {
    name: "Powertrain",
    logo: "/subteam-logos/powertrain_patch.png",
    lead: {
      name: "Jonathan Leung",
      role: "Powertrain Lead",
      image: "/headshots/jonathan_leung.jpg",
      linkedin: "https://www.linkedin.com/in/jt-leung/",
    },
    members: [
      {
        name: "Chris Mou",
        role: "Powertrain Lead",
        image: "/headshots/chris_mou.png",
        linkedin: "https://www.linkedin.com/in/chris-j-mou/",
      },
    ],
  },
  {
    name: "Suspension",
    logo: "/subteam-logos/suspension_patch.png",
    logoPosition: "0 0 341 341",
    lead: {
      name: "Vikram Repalle",
      role: "Suspension Lead",
      image: "/headshots/vikram_repalle.jpg",
      linkedin: "https://www.linkedin.com/in/vikram-repalle-9744bb291/",
    },
    members: [
      // {
      //   name: "Emma Davis",
      //   role: "CFD Engineer",
      //   image: "/placeholder.svg?height=300&width=300&text=Emma+Davis",
      //   linkedin: "https://www.linkedin.com/in/emmadavis",
      // },
    ],
  },
];

function MemberCard({ name, role, image, linkedin }) {
  return (
    <Link
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
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
  );
}

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="section-title text-4xl font-bold text-center mb-12">
              OUR TEAM
            </h1>
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
                  <h2 className="section-title text-3xl font-bold">
                    {subteam.name.toUpperCase()} TEAM
                  </h2>
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
  );
}
