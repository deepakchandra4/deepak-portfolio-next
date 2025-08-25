/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#0A1929] to-[#040D12]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300">
          <p className="mb-6">
            I'm a passionate MCA graduate with expertise in full-stack
            development using the MERN stack. I completed a 6-month internship
            at Manak Analytics & Development Pvt Ltd, where I gained hands-on
            experience in building responsive, high-performance web
            applications.
          </p>
          <p className="mb-6">
            During my internship, I contributed to improving user engagement
            and optimizing the performance of APIs. My commitment to clean code
            and continuous learning drives me to create seamless digital
            experiences. I am always excited about new challenges and eager to
            apply and expand my skills in full-stack development.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://www.linkedin.com/in/deepak-chandra-maurya-a03a21266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/deepakchandra4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
