import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Trophy,
  Award,
  Medal,
  GraduationCap,
  PenToolIcon as Tools,
  Users,
  Brain,
  Rocket,
} from "lucide-react";

const sponsorTiers = [
  {
    name: "Title",
    amount: "$10,000+",
    benefits: [
      "Choice of logo size and placement on car",
      "Collaboration with designers on livery for car",
      "Invitation to lab and design fair",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Platinum",
    amount: "$5,000+",
    benefits: [
      "Extra large logo on car",
      "Invitation to lab and design fair",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Gold",
    amount: "$3,500+",
    benefits: [
      "Large logo on car",
      "Resume database access",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Silver",
    amount: "$2,000+",
    benefits: [
      "Medium logo on car",
      "Logo on team wear",
      "Social media promotion",
      "Featured on website",
    ],
  },
  {
    name: "Partner",
    amount: "$1,000+",
    benefits: [
      "Small logo on car",
      "Social media promotion",
      "Featured on website",
    ],
  },
];

const studentBenefits = [
  {
    icon: Tools,
    title: "Hands-on Experience",
    description:
      "Work with cutting-edge technology and tools in electric vehicle development",
  },
  {
    icon: Brain,
    title: "Technical Skills",
    description:
      "Gain practical engineering skills in your specific area of interest",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborate with fellow engineers in a professional team environment",
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Build your portfolio and network with industry professionals",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] bg-black">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ba0zlIEwJVov6pkgK1hBkCpDslIu7G.png"
            alt="UCI FSAE Team at Engineering Hall"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-vintage-white space-y-6">
              <h1 className="section-title text-5xl font-bold mb-4">
                UCI FORMULA SAE ELECTRIC
              </h1>
              <p className="text-xl leading-relaxed">
                Join us, a dedicated team of Henry Samueli School of Engineering
                students, as we build UCI's electric racecar to compete in
                Formula SAE national.
              </p>
              <p className="text-2xl font-bold text-vintage-yellow">
                Charge the future!
              </p>
              <div className="pt-4 flex gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
                >
                  Join Our Team
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
                >
                  Sponsor Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-20 bg-vintage-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title text-5xl font-bold mb-4">
                INNOVATE. ENGINEER. COMPETE.
              </h2>
              <p className="text-xl text-vintage-navy">
                We are UCI Anteater Electric, pushing the limits of electric
                vehicle performance in Formula SAE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/team"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] vintage-box-shadow"
              >
                <Image
                  src="/images/socalshootout_team_crop.jpg?height=800&width=1200"
                  alt="UCI FSAE Team"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/80 via-vintage-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-vintage-white">
                  <h3 className="text-2xl font-bold mb-2">OUR TEAM</h3>
                  <p className="text-vintage-white/90">
                    Meet our subteam leads and members.
                  </p>
                </div>
              </a>

              <a
                href="/subteams"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] vintage-box-shadow"
              >
                <Image
                  src="/images/lab_work.jpg?height=800&width=1200"
                  alt="UCI FSAE Subteams"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/80 via-vintage-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-vintage-white">
                  <h3 className="text-2xl font-bold mb-2">OUR SUBTEAMS</h3>
                  <p className="text-vintage-white/90">
                    Discover our specialized engineering groups.
                  </p>
                </div>
              </a>

              <a
                href="/sponsors"
                className="group relative overflow-hidden rounded-xl aspect-[4/3] vintage-box-shadow"
              >
                <Image
                  src="/images/helmet_back.jpg?height=800&width=1200"
                  alt="UCI FSAE Sponsors"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vintage-navy/80 via-vintage-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-vintage-white">
                  <h3 className="text-2xl font-bold mb-2">OUR SPONSORS</h3>
                  <p className="text-vintage-white/90">
                    The organizations and people that make what we do possible.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-vintage-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold mb-8">
              LATEST NEWS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-vintage-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 vintage-box-shadow"
                >
                  <Image
                    src={`/placeholder-news.png?height=200&width=400&text=News+${i}`}
                    alt={`News ${i}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-vintage-navy mb-2">
                      Exciting Development {i}
                    </h3>
                    <p className="text-vintage-navy mb-4">
                      Our team has made significant progress in the design and
                      construction of our latest racing vehicle. Stay tuned for
                      more updates!
                    </p>
                    <a
                      href="#"
                      className="text-vintage-orange hover:text-vintage-red transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor Section */}
        <section className="py-20 bg-vintage-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title text-4xl font-bold mb-4">
                SUPPORT OUR TEAM
              </h2>
              <p className="text-xl text-vintage-navy">
                Partner with UCI Formula SAE and help drive the future of
                electric racing
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {sponsorTiers.map((tier, index) => {
                const Icon = index === 0 ? Trophy : index === 1 ? Award : Medal;
                return (
                  <div
                    key={tier.name}
                    className="relative bg-vintage-white rounded-xl shadow-lg p-6 border-2 border-vintage-navy hover:shadow-xl transition-shadow vintage-box-shadow"
                  >
                    <div className="text-center mb-6">
                      <Icon className="w-12 h-12 mx-auto text-vintage-orange mb-4" />
                      <h3 className="text-2xl font-bold text-vintage-navy">
                        {tier.name}
                      </h3>
                      <p className="text-xl font-semibold text-vintage-orange mt-2">
                        {tier.amount}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center text-vintage-navy"
                        >
                          <span className="w-1.5 h-1.5 bg-vintage-orange rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="mt-6 block text-center py-2 px-4 bg-vintage-lightgray text-vintage-navy rounded-md hover:bg-vintage-orange hover:text-vintage-white transition-colors vintage-box-shadow"
                    >
                      Become a Sponsor
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Student Recruitment Section */}
        <section className="py-20 bg-[#f5f5f5] text-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="section-title text-4xl font-bold mb-6">
                    JOIN OUR ENGINEERING TEAM
                  </h2>
                  <p className="text-xl mb-8">
                    Are you a UCI Engineering student passionate about electric
                    vehicles and racing? Join our team and get hands-on
                    experience building the future of motorsport.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {studentBenefits.map((benefit) => {
                      const Icon = benefit.icon;
                      return (
                        <div
                          key={benefit.title}
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-shrink-0">
                            <Icon className="w-6 h-6 text-vintage-orange" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-black">
                              {benefit.title}
                            </h3>
                            <p className="text-sm text-black">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center space-x-2 bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
                    >
                      <GraduationCap className="w-5 h-5" />
                      <span>Apply to Join</span>
                    </a>
                  </div>
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg vintage-box-shadow">
                  <Image
                    src="/images/socalshootout_1.jpg?height=400&width=600&text=Students+Working"
                    alt="UCI FSAE students working on electric race car"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
