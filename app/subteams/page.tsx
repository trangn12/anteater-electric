import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  Shield,
  Power,
  Wind,
  Box,
  User,
  Hexagon,
  Briefcase,
  Diamond,
} from "lucide-react";

const subteamIcons = [
  {
    name: "Accumulator",
    icon: Box,
    logo: "/subteam-logos/accumulator_logo.png",
    //logoPosition: "0 0 341 341", // Position for the first logo
  },
  {
    name: "Aerodynamics",
    icon: Wind,
    logo: "/subteam-logos/aero_logo.png",
    // logoPosition: "0 0 341 341", // Position for the first logo
  },
  {
    name: "Chassis",
    icon: Box,
    logo: "/subteam-logos/chassis_logo.png",
    // logoPosition: "341 0 682 341", // Position for the second logo
  },
  {
    name: "Electronics",
    icon: Hexagon,
    logo: "/subteam-logos/electronics_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the third logo
  },
  {
    name: "Embedded",
    icon: Diamond,
    logo: "/subteam-logos/embedded_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the third logo
  },
  {
    name: "Operations and Outreach",
    icon: Briefcase,
    logo: "/subteam-logos/o2_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the seventh logo
  },
  {
    name: "Powertrain",
    icon: Power,
    logo: "/subteam-logos/powertrain_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the fifth logo
  },
  {
    name: "Suspension",
    icon: Shield,
    logo: "/subteam-logos/suspension_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the fourth logo
  },
  {
    name: "Ergonomics",
    icon: User,
    logo: "/subteam-logos/o2_logo.png",
    // logoPosition: "682 0 1023 341", // Position for the sixth logo
  },
];

const subteamDetails = [
  {
    name: "Accumulator",
    description: "TBD",
    image: "/subteam-photos/accumulator_photo_crop.jpg",
    alignment: "left",
    logo: "/subteam-logos/accumulator_logo.png",
    // logoPosition: "0 0 341 341",
  },
  {
    name: "Aerodynamics",
    description:
      "Aerodynamics plays a crucial role in vehicle performance. Our aero team uses computational fluid dynamics (CFD) and wind tunnel testing to design and validate aerodynamic packages that generate maximum downforce while minimizing drag.",
    image: "/subteam-photos/aero_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/aero_logo.png",
    // logoPosition: "0 0 341 341",
  },
  {
    name: "Chassis",
    description:
      "The chassis team is responsible for the structural backbone of our vehicle. Through careful design and analysis, we create a lightweight yet rigid frame that ensures driver safety while maximizing performance through optimal weight distribution.",
    image: "/subteam-photos/dynamics_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/chassis_logo.png",
    // logoPosition: "341 0 682 341",
  },
  {
    name: "Electronics",
    description:
      "Our electrical team develops the nervous system of the vehicle, including the battery management system, sensor integration, and data acquisition. We ensure reliable power delivery and comprehensive vehicle monitoring.",
    image: "/subteam-photos/electronics_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/electronics_logo.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Embedded",
    description: "TBD",
    image: "/subteam-photos/embedded_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/embedded_logo.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Ergonomics",
    description: "TBD",
    image: "/subteam-photos/ergo_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/o2_logo.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Operations and Outreach",
    description: "TBD",
    image: "/subteam-photos/o2_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/o2_logo.png",
  },
  {
    name: "Powertrain",
    description:
      "The powertrain team focuses on power delivery and efficiency. We develop custom motor controllers and transmission systems to maximize the performance of our electric powertrain, ensuring every watt of power is effectively transferred to the wheels.",
    image: "/subteam-photos/powertrain_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/powertrain_logo.png",
  },
  {
    name: "Suspension",
    description:
      "Our suspension team designs and optimizes the vehicle's handling characteristics through advanced kinematics and dynamics analysis. Using sophisticated simulation tools and real-world testing, we ensure optimal tire performance and vehicle stability.",
    image: "/subteam-photos/dynamics_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/suspension_logo.png",
  },
];

export default function SubteamsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow pt-16">
        {/* Subteams Overview Section */}
        <section className="relative h-[50vh] bg-black">
          <Image
            src="/subteam-photos/leads_photo_crop.jpg"
            alt="UCI FSAE Subteams"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-vintage-white">
              <h1 className="section-title text-4xl md:text-5xl font-bold mb-4">
                OUR SUBTEAMS
              </h1>
              <p className="text-xl md:text-2xl">
                Specialized Engineering Groups Working Together
              </p>
            </div>
          </div>
        </section>

        {/* Subteams Overview Content */}
        <section className="py-20 bg-vintage-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-xl text-vintage-navy leading-relaxed">
                UCI Racing combines multiple disciplines, uniting students from
                various fields to design, build, and race a high-performance
                electric car. Each subteam plays a crucial role in our success,
                focusing on specific aspects of the vehicle's development and
                team operations.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
              {subteamIcons.map((team) => {
                const Icon = team.icon;
                return (
                  <div
                    key={team.name}
                    className="flex flex-col items-center gap-2 p-4 bg-vintage-lightgray rounded-lg vintage-box-shadow"
                  >
                    {team.logo ? (
                      <div className="relative w-24 h-24 mb-2">
                        <Image
                          src={team.logo || "/placeholder.svg"}
                          alt={`${team.name} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Icon className="w-8 h-8 text-vintage-navy" />
                    )}
                    <span className="text-sm font-medium text-vintage-navy">
                      {team.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Subteams Detail Section */}
        <section className="py-20 bg-vintage-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-16">
              SUBTEAM DETAILS
            </h2>

            <div className="space-y-20">
              {subteamDetails.map((team) => (
                <div
                  key={team.name}
                  className={`flex flex-col ${
                    team.alignment === "right"
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } gap-8 items-center`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="relative aspect-video rounded-lg overflow-hidden vintage-box-shadow">
                      <Image
                        src={team.image || "/placeholder.svg"}
                        alt={`${team.name} Team at work`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 space-y-4">
                    <div className="flex items-center gap-4">
                      {team.logo && (
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Image
                            src={team.logo || "/placeholder.svg"}
                            alt={`${team.name} Logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold text-vintage-navy">
                        {team.name}
                      </h3>
                    </div>
                    <p className="text-vintage-navy leading-relaxed">
                      {team.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Team Section */}
        <section className="py-16 bg-[#f5f5f5] text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title text-3xl font-bold mb-6">
              JOIN OUR TEAM
            </h2>
            <p className="text-black max-w-2xl mx-auto mb-8">
              Whether you're interested in engineering, business, or project
              management, there's a place for you on our team. Join us in
              pushing the boundaries of electric vehicle technology!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
              >
                Apply Now
              </a>
              <a
                href="/contact"
                className="inline-block bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
              >
                Sponsor Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
