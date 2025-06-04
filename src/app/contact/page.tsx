import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Likha AI",
  description:
    "Contact us for custom AI-powered solutions. Email, form, and calendar integration.",
};

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to transform your business with AI? Let&apos;s discuss how we
            can help you achieve your goals.
          </p>
          <form className="space-y-6" aria-label="Contact form">
            <div className="group">
              <label
                htmlFor="name"
                className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>
            <div className="group">
              <label
                htmlFor="company"
                className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Your Company"
                autoComplete="organization"
              />
            </div>
            <div className="group">
              <label
                htmlFor="email"
                className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@company.com"
                autoComplete="email"
              />
            </div>
            <div className="group">
              <label
                htmlFor="message"
                className="block font-medium mb-2 text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="mb-6">
              Schedule a call with our team to discuss your project
              requirements.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:singhbalr1@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                singhbalr1@gmail.com
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
