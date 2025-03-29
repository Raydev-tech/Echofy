import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#0a2512] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-green-500">
                🌱
              </div>
              <h1 className="text-xl font-bold">Echofy</h1>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sustainable solutions for a greener tomorrow. Join us in our mission to protect our planet.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" className="text-white hover:text-green-400 text-lg">
                🔵
              </a>
              <a href="https://instagram.com" target="_blank" className="text-white hover:text-green-400 text-lg">
                📸
              </a>
              <a href="https://twitter.com" target="_blank" className="text-white hover:text-green-400 text-lg">
                🐦
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Services", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-green-400 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Recycling", "Eco Consulting", "Ocean Cleaning", "Renewable Energy", "Sustainable Planning"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-green-400 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">📍 123 Green Street, Eco City, Planet Earth</li>
              <li className="text-gray-400 text-sm">📞 +1 (555) 123-4567</li>
              <li className="text-gray-400 text-sm">📧 info@echofy.com</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Echofy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
                <li key={policy}>
                  <a href="#" className="text-gray-400 hover:text-green-400 text-sm">
                    {policy}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
