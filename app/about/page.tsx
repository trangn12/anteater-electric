import Image from "next/image"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Zap, Users, Lightbulb, Trophy, Cpu, Cog, Battery, Shield } from "lucide-react"

const values = [
  { icon: Zap, name: "Innovation", description: "Pushing the boundaries of electric vehicle technology" },
  { icon: Users, name: "Teamwork", description: "Collaborating across disciplines to achieve our goals" },
  { icon: Lightbulb, name: "Creativity", description: "Finding unique solutions to complex engineering challenges" },
  { icon: Trophy, name: "Excellence", description: "Striving for the highest standards in everything we do" },
]

const techStack = [
  { icon: Cpu, name: "Advanced Control Systems", description: "State-of-the-art motor control and power management" },
  { icon: Cog, name: "CAD/CAM Software", description: "Precision design and manufacturing tools" },
  { icon: Battery, name: "Battery Technology", description: "High-performance lithium-ion battery systems" },
  { icon: Shield, name: "Safety Systems", description: "Cutting-edge safety and data acquisition technology" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-black">
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=UCI+FSAE+Team+in+Action"
            alt="UCI FSAE Team in Action"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-vintage-white">
              <h1 className="section-title text-4xl md:text-5xl font-bold mb-4">ABOUT UCI FORMULA SAE</h1>
              <p className="text-xl md:text-2xl">Driving the Future of Electric Racing</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-vintage-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-3xl font-bold mb-6">OUR MISSION</h2>
              <p className="text-xl text-vintage-navy leading-relaxed">
                At UCI Formula SAE, we are dedicated to designing, building, and racing cutting-edge electric vehicles.
                Our mission is to push the boundaries of sustainable automotive technology while providing hands-on
                engineering experience to students passionate about innovation and motorsports.
              </p>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="py-16 bg-vintage-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-12">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="bg-vintage-white rounded-lg shadow-md p-6 text-center vintage-box-shadow"
                >
                  <value.icon className="w-12 h-12 text-vintage-orange mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-vintage-navy">{value.name}</h3>
                  <p className="text-vintage-navy">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-vintage-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-3xl font-bold text-center mb-12">OUR TECH STACK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center bg-vintage-lightgray rounded-lg shadow-md p-6 vintage-box-shadow"
                >
                  <tech.icon className="w-12 h-12 text-vintage-orange mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-vintage-navy">{tech.name}</h3>
                    <p className="text-vintage-navy">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-[#f5f5f5] text-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="section-title text-3xl font-bold mb-6">JOIN OUR TEAM</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Are you passionate about electric vehicles, motorsports, or engineering innovation? Join UCI Formula SAE
              and be part of the future of sustainable racing technology!
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
  )
}
