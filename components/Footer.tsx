export function Footer() {
  return (
    <footer className="bg-vintage-navy text-vintage-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-vintage-yellow mb-2 vintage-text-shadow">UCI Formula SAE</h3>
            <p>University of California, Irvine</p>
            <p>Irvine, CA 92697</p>
          </div>
          <div className="w-full md:w-auto">
            <h4 className="text-lg font-semibold text-vintage-yellow mb-2">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-vintage-white hover:text-vintage-yellow transition-colors">
                Facebook
              </a>
              <a href="#" className="text-vintage-white hover:text-vintage-yellow transition-colors">
                Twitter
              </a>
              <a href="#" className="text-vintage-white hover:text-vintage-yellow transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 UCI Formula SAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
