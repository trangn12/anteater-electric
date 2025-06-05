import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-vintage-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-black">
          <Image
            src="/images/socalshootout_carempty_crop.jpg"
            alt="Contact UCI FSAE"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-vintage-white">
              <h1 className="section-title text-4xl md:text-5xl font-bold mb-4">
                CONTACT US
              </h1>
              <p className="text-xl md:text-2xl">Get in Touch with Our Team</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-vintage-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="section-title text-2xl font-semibold mb-6">
                  GET IN TOUCH
                </h2>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-vintage-navy mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border-2 border-vintage-navy rounded-md bg-vintage-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-vintage-navy mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border-2 border-vintage-navy rounded-md bg-vintage-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-vintage-navy mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border-2 border-vintage-navy rounded-md bg-vintage-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-vintage-navy mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border-2 border-vintage-navy rounded-md bg-vintage-white"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-vintage-orange text-vintage-white px-6 py-2 rounded-md hover:bg-vintage-red transition-colors vintage-box-shadow font-semibold"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="section-title text-2xl font-semibold mb-6">
                  CONTACT INFORMATION
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-vintage-orange mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-vintage-navy">
                        Address
                      </h3>
                      <p className="text-vintage-navy">
                        University of California, Irvine
                      </p>
                      <p className="text-vintage-navy">Irvine, CA 92697</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-vintage-orange mr-4" />
                    <div>
                      <h3 className="font-semibold text-vintage-navy">Phone</h3>
                      <p className="text-vintage-navy">(949) 824-5011</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-vintage-orange mr-4" />
                    <div>
                      <h3 className="font-semibold text-vintage-navy">Email</h3>
                      <p className="text-vintage-navy">ucifsae@uci.edu</p>
                    </div>
                  </div>
                </div>

                <h2 className="section-title text-2xl font-semibold mt-12 mb-6">
                  FOLLOW US
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-vintage-orange hover:text-vintage-red transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-vintage-orange hover:text-vintage-red transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-vintage-orange hover:text-vintage-red transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-vintage-orange hover:text-vintage-red transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>

                <div className="mt-12">
                  <h2 className="section-title text-2xl font-semibold mb-6">
                    LOCATION
                  </h2>
                  <div className="aspect-w-16 aspect-h-9 vintage-box-shadow rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1932677024473!2d-117.84296708479!3d33.64266848071431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcde0edc8d16f9%3A0x42c5a2295292aa91!2sUniversity%20of%20California%2C%20Irvine!5e0!3m2!1sen!2sus!4v1645656盲0000!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-full rounded-lg"
                    ></iframe>
                  </div>
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
