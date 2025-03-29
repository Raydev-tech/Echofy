import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Play,ChevronLeft,ChevronRight } from "lucide-react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    <section className="relative bg-[#0a2512] text-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl" data-aos="fade-up">
          <p className="text-green-400 mb-2 uppercase tracking-wider text-sm">Welcome to Echofy</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Safe Controls <br />
            Environment
          </h2>
          <p className="text-gray-300 mb-8 max-w-lg">
            Sustainable solutions for businesses with innovative eco-friendly technologies. Environmentally focused ideas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-6 py-2 rounded-lg">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Background Image with Less Opacity */}
      <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l  to-[#0a2512] z-10"></div>
        <img
          src="https://i.pinimg.com/236x/27/95/ce/2795ce0f934981a1430a6a17867f4d27.jpg"
          alt="Plant growing from soil"
          className="object-cover h-full w-full opacity-70" // Increased opacity for better clarity
        />
      </div>
    </section>
    <section className="bg-green-500 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-between gap-4">
          {[
            { text: "Ocean-Recycling", icon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" },
            { text: "Environmental", icon: "M2 22a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8 M12 11V3 M9 6l3-3 3 3" },
            { text: "Renewable-Energy", icon: "M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M6.34 17.66l-1.41 1.41 M19.07 4.93l-1.41 1.41" },
            { text: "Ocean-Recycling", icon: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" },
            { text: "Environmental", icon: "M2 22a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8 M12 11V3 M9 6l3-3 3 3" },
          ].map((item, index) => (
            <div className="flex items-center gap-2" key={index} data-aos="fade-up">
              <div className="bg-white/20 p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d={item.icon}></path>
                </svg>
              </div>
              <span className="text-white text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Section */}
          <div className="md:w-1/2 relative" data-aos="fade-right">
            <div className="bg-green-500/10 p-1 rounded-lg">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://i.pinimg.com/474x/47/19/c3/4719c3163a755ebf5fa864ad81e4a323.jpg?height=400&width=500"
                  alt="Car on green landscape"
                  width={500}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 text-white p-2 rounded-lg flex items-center gap-2">
                  <Play size={16} className="text-green-500" />
                  <span className="text-sm font-medium">WATCH VIDEO</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500/10 rounded-lg -z-10"></div>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-green-500"></div>
              <p className="text-green-600 text-sm font-medium">OUR MAIN CONCEPT</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Environmental Sustainable <br />
              Forever Green Future
            </h2>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Economic Benefits",
                  description:
                    "Sustainable practices that benefit both the environment and your bottom line.",
                  icon: "M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
                },
                {
                  title: "Safe Environment",
                  description:
                    "Solutions that protect our planet while ensuring safety for all communities.",
                  icon: "M2 22a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8 M12 11V3 M9 6l3-3 3 3",
                },
              ].map((item, index) => (
                <div className="flex gap-4" key={index} data-aos="fade-up">
                  <div className="bg-green-100 rounded-full p-3 h-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d={item.icon}></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex items-center gap-4" data-aos="zoom-in">
              <button className="bg-green-500 hover:bg-green-600 text-white">Read More</button>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-500"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="text-gray-600 text-sm">Certified Green</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-green-500"></div>
              <p className="text-green-600 text-sm font-medium">OUR SERVICES</p>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">
              Echofy Provide Environment <br />
              Best Leading Services
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2" data-aos="fade-left">
            <button className="p-2 border border-gray-300 rounded-full hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:bg-green-500 hover:border-green-500 hover:text-white transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Dirty Recycling",
              description:
                "We turn waste into resources with our innovative recycling solutions for all types of materials.",
              icon: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3",
              image: "https://i.pinimg.com/236x/8b/a5/81/8ba581d4591c4f73bfd4a0011fac5990.jpg?height=200&width=400",
              alt: "Recycling process",
            },
            {
              title: "Safe Environment",
              description:
                "Creating safer spaces through sustainable practices and eco-friendly technologies.",
              icon: "M2 22a8 8 0 0 1 8-8h4a8 8 0 0 1 8 8 M12 11V3 M9 6l3-3 3 3",
              image: "https://i.pinimg.com/236x/7e/d5/b9/7ed5b9d292960c920e74b915f392aea2.jpg?height=200&width=400",
              alt: "Hands forming heart around plant",
            },
            {
              title: "Cleaning Ocean",
              description:
                "Dedicated to removing plastic and pollutants from our oceans to protect marine life.",
              icon: "M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5 M8.5 7.5L12 3m0 0 3.5 4.5 M12 3v13.5",
              image: "https://i.pinimg.com/236x/3a/29/b9/3a29b9d79fa64b0ef35d7aa15f940922.jpg?height=200&width=400",
              alt: "Ocean cleaning",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Adds delay for staggered effect
            >
              <div className="p-6">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d={service.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              </div>
              <div className="h-48 relative">
                <img src={service.image} alt={service.alt} className="object-cover w-full h-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="md:w-1/2" data-aos="fade-right">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-1 bg-green-500"></div>
              <p className="text-green-600 text-sm font-medium">OUR MISSION</p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Getting A Greener Future <br />
              Safe Environment
            </h2>

            <p className="text-gray-600 mb-8">
              Our commitment to a sustainable future drives everything we do. Join us in creating a world where
              environmental protection and economic growth go hand in hand.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap gap-6 mb-8">
              {["Safe Environment", "Dirty Recycling"].map((item, index) => (
                <div key={index} className="flex items-center gap-2" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="bg-green-100 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-600"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Progress Bars */}
            <div className="space-y-4">
              {[
                { label: "Recycling", value: 85 },
                { label: "Planting", value: 90 },
                { label: "Green Planning", value: 80 },
              ].map((progress, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{progress.label}</span>
                    <span className="text-sm font-medium text-gray-700">{progress.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-2 bg-green-500" style={{ width: `${progress.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-green-100 w-32 h-32 rounded-full"></div>
              <div className="relative z-10 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="https://i.pinimg.com/474x/fb/34/99/fb3499a01a4caa1e3e389a351954aa04.jpg?height=400&width=400"
                  alt="Hands holding plant"
                  className="w-full h-auto"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white rounded-full p-4">
                  <span className="font-bold text-xl">PLANT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HomePage;
