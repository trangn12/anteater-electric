import Image from "next/image";
import Link from "next/link";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { link } from "fs";

const subteams = [
  {
    name: "Accumulator",
    logo: "/subteam-logos/accumulator_patch.png",
    lead: {
      name: "Camryn Wright",
      role: "Chief Engineer, Accumulator Lead",
      image: "/headshots/camryn_wright.jpg",
      linkedin: "http://www.linkedin.com/in/camryn-wright/",
    },
    members: [
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
      name: "Alexander Sadigursky",
      role: "Aerodynamics Lead",
      image: "/headshots/alexander_sadigursky.jpg",
      linkedin: "https://www.linkedin.com/in/sadigursky/",
    },
    members: [
      {
        name: "Dylan Richcreek",
        role: "Aerodynamics Co-Lead",
        image: "/headshots/dylan_gene_richcreek.jpg",
        linkedin: "https://www.linkedin.com/in/dylan-richcreek-3a40062a6/",
      },
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
      name: "Andrew Chao",
      role: "Chassis Lead",
      image: "/headshots/andrew_chao.jpg",
      linkedin: "https://www.linkedin.com/in/andrewychao/",
    },
    members: [
      {
        name: "Bochin Tong",
        role: "Chassis Co-Lead",
        image: "/headshots/bochin_tong.jpg",
        linkedin:
          "https://www.linkedin.com/in/bochintong?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      },
      {
        name: "Akil Nafi",
        role: "Chassis Co-Lead",
        image: "/headshots/akil_nafi.jpg",
        linkedin: "https://www.linkedin.com/in/akil-nafi/",
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
      {
        name: "Dom Serrano",
        role: "Assistant Lead",
        image: "/placeholder.svg",
        linkedin: "https://www.linkedin.com/in/johndoe",
      },
      {
        name: "Isaac An",
        role: "Assistant Lead",
        image: "/placeholder.svg",
        linkedin: "https://www.linkedin.com/in/johndoe",
      },
    ],
  },
  {
    name: "Breaks",
    logo: "/subteam-logos/suspension_patch.png",
    logoPosition: "0 0 341 341",
    lead: {
      name: "Walter Ramirez",
      role: "Brakes Lead",
      image: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    members: [
      {
        name: "Diego Martinez",
        role: "Brakes Lead",
        image: "/placeholder.svg",
        linkedin: "https://www.linkedin.com/in/johndoe",
      },
    ],
  },
  {
    name: "Electrical",
    logo: "/subteam-logos/electronics_patch.png",
    lead: {
      name: "Gabriel Schoene",
      role: "Lead Electrical Engineer",
      image: "/headshots/gabriel_schoene.jpg",
      linkedin: "https://www.linkedin.com/in/gabriel-schoene-228438294",
    },
    members: [
      //
    ],
  },
  {
    name: "Embedded",
    logo: "/subteam-logos/embedded_patch.png",
    lead: {
      name: "Natalie Perrochon",
      role: "EE Project Manager",
      image: "/headshots/natalie_perrochon.png",
      linkedin: "https://www.linkedin.com/in/natalie-perrochon/",
    },
    members: [
      {
        name: "Karan Thakkar",
        role: "Embedded Lead - Firmware",
        image: "/headshots/karan_thakkar.jfif",
        linkedin: "https://www.linkedin.com/in/ksthakkar/",
      },
      {
        name: "Alistair Keiller",
        role: "Embedded Lead - Data",
        image: "/headshots/alistair_keiller.jpg",
        linkedin: "https://www.linkedin.com/in/akeiller/",
      },
    ],
  },
  {
    name: "Ergonomics",
    logo: "/subteam-logos/ergo_patch.png",
    lead: {
      name: "Lorelei Hobbis",
      role: "Ergonomics Lead",
      image: "/placeholder.svg",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    members: [
      {
        name: "Meera Sambhwani",
        role: "Ergonomics Co-Lead",
        image: "/headshots/meera_sambhwani.png",
        linkedin: "https://www.linkedin.com/in/meera-sambhwani-a95bb0256/",
      },
      {
        name: "Katie Schmitz",
        role: "Ergonomics Co-Lead",
        image: "/headshots/katie_schmitz.jpg",
        linkedin: "https://www.linkedin.com/in/katie-schmitz-893308331/",
      },
    ],
  },
  {
    name: "Operations and Outreach",
    logo: "/subteam-logos/o2_patch.png",
    lead: {
      name: "Nuha Khan",
      role: "Operations and Outreach Lead",
      image: "/headshots/nuha_khan.jpg",
      linkedin: "https://www.linkedin.com/in/nuhakhan24/",
    },
    members: [
      {
        name: "Trang Nguyen",
        role: "Webmaster",
        image: "/headshots/trang_nguyen.jpg",
        linkedin: "https://www.linkedin.com/in/trangn12/",
      },
      {
        name: "Anna Lee",
        role: "Web developer",
        image: "/headshots/anna_lee.jpg",
        linkedin: "https://www.linkedin.com/in/anna-lee-ab7383257/",
      },
    ],
  },
  {
    name: "Powertrain",
    logo: "/subteam-logos/powertrain_patch.png",
    lead: {
      name: "Jonathan Leung",
      role: "Project Manager, Powertrain Lead",
      image: "/headshots/jonathan_leung.jpg",
      linkedin: "https://www.linkedin.com/in/jt-leung/",
    },
    members: [
      {
        name: "Pratik Palwai",
        role: "Powertrain Lead",
        image: "/placeholder.svg",
        linkedin: "https://www.linkedin.com/in/johndoe/",
      },
    ],
  },
];

function MemberCard({ name, role, image, linkedin }) {
  return (
    <Link
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="group">
      <div className="bg-vintage-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105 vintage-box-shadow">
        <div className="relative h-60 w-full">
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
            <h1 className="subsection-title text-4xl font-bold text-center mb-12">
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
                  <h2 className="subsection-title text-3xl font-bold">
                    {subteam.name.toUpperCase()} TEAM
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
