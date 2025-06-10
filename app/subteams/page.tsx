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
    logo: "/subteam-logos/accumulator_patch.png",
    //logoPosition: "0 0 341 341", // Position for the first logo
  },
  {
    name: "Aerodynamics",
    icon: Wind,
    logo: "/subteam-logos/aero_patch.png",
    // logoPosition: "0 0 341 341", // Position for the first logo
  },
  {
    name: "Chassis",
    icon: Box,
    logo: "/subteam-logos/chassis_patch.png",
    // logoPosition: "341 0 682 341", // Position for the second logo
  },
  {
    name: "Electronics",
    icon: Hexagon,
    logo: "/subteam-logos/electronics_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the third logo
  },
  {
    name: "Embedded",
    icon: Diamond,
    logo: "/subteam-logos/embedded_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the third logo
  },
  {
    name: "Operations and Outreach",
    icon: Briefcase,
    logo: "/subteam-logos/o2_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the seventh logo
  },
  {
    name: "Powertrain",
    icon: Power,
    logo: "/subteam-logos/powertrain_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the fifth logo
  },
  {
    name: "Suspension",
    icon: Shield,
    logo: "/subteam-logos/suspension_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the fourth logo
  },
  {
    name: "Ergonomics",
    icon: User,
    logo: "/subteam-logos/ergo_patch.png",
    // logoPosition: "682 0 1023 341", // Position for the sixth logo
  },
];

const subteamDetails = [
  {
    name: "Accumulator",
    description:
      "The Accumulator subteam develops the physical housing, thermal solution, and the wiring for the energy storage system (ESS) that powers the vehicle from the cell level up. This team also designs and manufactures a specialized hand cart to lift the battery into the chassis of the vehicle.",
    image: "/subteam-photos/accumulator_photo_crop.jpg",
    alignment: "left",
    logo: "/subteam-logos/accumulator_patch.png",
    // logoPosition: "0 0 341 341",
  },
  {
    name: "Aerodynamics",
    description:
      "The Aerodynamics subteam is responsible for the designing, manufacturing, testing and documentation of the body for the UCI electric racecar. The subteam is also responsible for the aerodynamic behavior of the vehicle, performing CFD analysis using programs such as SolidWorks and Flow Simulation.",
    image: "/subteam-photos/aero_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/aero_patch.png",
    // logoPosition: "0 0 341 341",
  },
  {
    name: "Chassis",
    description:
      "The Chassis subteam's mission is to engineer a design that balances minimal weight with exceptional structural integrity, ensuring precise component mounting through strategic triangulation. The chassis is the foundational structural framework of the vehicle, providing critical mounting points for suspension, powertrain, battery systems, and other key components. ",
    image: "/subteam-photos/dynamics_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/chassis_patch.png",
    // logoPosition: "341 0 682 341",
  },
  {
    name: "Electronics",
    description:
      "The Electronics subteam is responsible for designing, implementing, and optimizing the electrical systems of the vehicle. This includes managing high-voltage power distribution and low-voltage controls to ensure efficient and reliable operation of an electric race car. The team also focuses on integrating safety systems and ensuring compliance with competition regulations.",
    image: "/subteam-photos/electronics_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/electronics_patch.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Embedded",
    description:
      "The Embedded subteam is responsible for all the software and firmware development on the car. Embedded members will be using various microcontrollers to collect data from across the car, control the motor output and ensure that the car is safely and properly functioning. The embedded team will also be designing a system to wirelessly send and display diagnostic data for other teams to use.",
    image: "/subteam-photos/embedded_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/embedded_patch.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Ergonomics",
    description:
      "The Ergonomics subteam is responsible for the design, manufacturing, testing, and complete documentation of the EV's brake system, pedal assemblies, driver seat, seatbelt harness, and steering system. This subsystem's assembly designs promote functionality, driver safety, ergonomics, conditions, and ensure the driver and all engineers are aware of various vehicle inputs and ease of serviceability. Importantly, Ergonomics is responsible for driver safety in all outputs.",
    image: "/subteam-photos/ergo_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/ergo_patch.png",
    // logoPosition: "682 0 1023 341",
  },
  {
    name: "Operations and Outreach",
    description:
      "The Operations and Outreach subteam is responsible for ensuring that the technical and non-technical aspects of the project are well-coordinated, enabling the engineering teams to focus on designing and building the car. Their work is essential for the successful development and competition of the FSAE car. This team also manages the project’s exposure through social media, project website, and networking.",
    image: "/subteam-photos/o2_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/o2_patch.png",
  },
  {
    name: "Powertrain",
    description:
      "The Powertrain subteam manages the driveline system, which is composed of a DC brushless motor, motor controller, differential, and axles. The subteam also designs and builds the motor controller apparatus to monitor and safely supply the motors with energy from the battery system.",
    image: "/subteam-photos/powertrain_photo.jpg",
    alignment: "right",
    logo: "/subteam-logos/powertrain_patch.png",
  },
  {
    name: "Suspension",
    description:
      "The Suspension subteam is responsible for designing not only a reliable system but a system tolerable within all dynamic scenarios. Components include control arms, rocker arms, wheel uprights and many others.",
    image: "/subteam-photos/dynamics_photo.jpg",
    alignment: "left",
    logo: "/subteam-logos/suspension_patch.png",
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
            src="/images/leads_crop.jpg"
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
