import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#040D12] to-[#0A1929]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 text-gray-300">
            {/* <p className="mb-2">Location: Lucknow, Uttar Pradesh</p> */}
            <p className="mb-2">
              {" "}
              Phone:{" "}
              <Link href="tel:+919120279300" className="text-blue-400">
                +91 9120279300
              </Link>
            </p>
            <p className="mb-2">
              Email:
              <Link
                href="mailto:deepakchandra4551@gmail.com"
                className="text-blue-400 "
              >
                deepakchandra4551@gmail.com
              </Link>{" "}
            </p>
          </div>
          <form
            className="space-y-6"
            action="https://getform.io/f/6e52b139-0076-4904-b9b1-53ba9f5e3168"
            method="POST"
          >
            <div>
              <label htmlFor="name" className="block text-gray-200 mb-2">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-[#0A1929]/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 mb-2">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-[#0A1929]/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                name="message"
                className="w-full px-4 py-2 bg-[#0A1929]/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
