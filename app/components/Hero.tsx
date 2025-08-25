/* eslint-disable react/no-unescaped-entities */
  //.
const Hero = () => {
  return (
    <section className="h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#040D12] to-[#0A1929] text-white" id="hero">
      <div className="container mx-auto max-md:mt-20 mt-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Deepak</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Full Stack Developer | MERN
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
          Passionate about building scalable web applications and leveraging AI tools to create innovative solutions. 
          Experienced in MERN stack development with a focus on performance optimization and user experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-[#0A1929]/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
            <span className="text-blue-400">Full Stack Development</span>
          </div>
          <div className="bg-[#0A1929]/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
            <span className="text-blue-400">AI Integration</span>
          </div>
          <div className="bg-[#0A1929]/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
            <span className="text-blue-400">Performance Optimization</span>
          </div>
          <div className="bg-[#0A1929]/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700">
            <span className="text-blue-400">Wordpress Development</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 