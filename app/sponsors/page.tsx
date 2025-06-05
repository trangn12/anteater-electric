import Image from "next/image";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Trophy, Award, Medal, Check } from "lucide-react";

const sponsorTiers = [
  {
    name: "Title",
    icon: Trophy,
    amount: "$10,000+",
    benefits: [
      "Choice of logo size and placement on car",
      "Featured on website",
      "Team merchandise",
      "Social media promotion",
      "VIP invitation to racing events",
    ],
  },
  {
    name: "Platinum",
    icon: Trophy,
    amount: "$5,000+",
    benefits: [
      "Large logo on car",
      "Featured on website",
      "Team merchandise",
      "Social media promotion",
      "VIP invitation to racing events",
    ],
  },
  {
    name: "Gold",
    icon: Award,
    amount: "$2,500+",
    benefits: [
      "Medium logo on car",
      "Logo on website",
      "Team merchandise",
      "Social media mention",
    ],
  },
  {
    name: "Silver",
    icon: Medal,
    amount: "$1,000+",
    benefits: ["Medium logo on car", "Name on website", "Social media mention"],
  },
];

const currentSponsors = [
  {
    name: "Welsh Advisors",
    tier: "Title",
    logo: "/sponsor-logos/welshadvisors_logo.png",
  },
  {
    name: "Perficient",
    tier: "Partner",
    logo: "/sponsor-logos/perficient_logo.jpg",
  },
  {
    name: "Murata Electronics",
    tier: "Partner",
    logo: "/sponsor-logos/murataelectronics_logo.png",
  },
  {
    name: "SendCutSend",
    tier: "Partner",
    logo: "/sponsor-logos/sendcutsend_logo.png",
  },
  {
    name: "Parker Lord",
    tier: "Platinum",
    logo: "/sponsor-logos/parkerlord_logo.png",
  },
  {
    name: "Parker Hannifin",
    tier: "Gold",
    logo: "/sponsor-logos/parkerhannifin_logo.png",
  },
  {
    name: "PEC Tools",
    tier: "Silver",
    logo: "/sponsor-logos/pectools_logo.jpeg",
  },
  {
    name: "Osh Cut",
    tier: "Silver",
    logo: "/sponsor-logos/oshcut_logo.png",
  },
];

export default function SponsorsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-black">
          <Image
            src="/images/staring_crop.jpg"
            alt="UCI FSAE Sponsors"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-vintage-white">
              <h1 className="section-title text-4xl md:text-5xl font-bold mb-4">
                OUR SPONSORS
              </h1>
              <p className="text-xl md:text-2xl">
                Powering Innovation in Electric Racing
              </p>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-16 bg-vintage-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-12">
              SPONSORSHIP OPPORTUNITIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sponsorTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="bg-vintage-lightgray rounded-lg shadow-md p-6 vintage-box-shadow"
                >
                  <div className="flex items-center justify-center mb-4">
                    <tier.icon className="w-12 h-12 text-vintage-orange" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2 text-vintage-navy">
                    {tier.name}
                  </h3>
                  <p className="text-xl text-center text-vintage-orange mb-4">
                    {tier.amount}
                  </p>
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex items-center text-vintage-navy"
                      >
                        <Check className="w-5 h-5 text-vintage-orange mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Sponsors */}
        <section className="py-16 bg-vintage-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-12">
              OUR CURRENT SPONSORS
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {currentSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col items-center">
                  <div className="bg-vintage-white p-4 rounded-lg vintage-box-shadow mb-2">
                    <Image
                      src={sponsor.logo || "/placeholder.svg"}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={100}
                      className="mb-2"
                    />
                  </div>
                  <p className="font-semibold text-vintage-navy">
                    {sponsor.name}
                  </p>
                  <p className="text-sm text-vintage-orange">
                    {sponsor.tier} Sponsor
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Sponsor CTA */}
        <section className="py-16 bg-[#f5f5f5] text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title text-3xl font-bold mb-6">
              BECOME A SPONSOR
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of electric racing technology. Your
              support can make a significant impact on our team's success and
              the development of sustainable motorsports.
            </p>
            <a
              href="/contact"
              className="inline-block bg-vintage-orange text-vintage-white px-8 py-3 rounded-md font-semibold hover:bg-vintage-red transition-colors vintage-box-shadow"
            >
              Contact Us to Sponsor
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
