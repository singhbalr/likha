"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", company: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-transparent min-h-[50vh] sm:min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Contact us"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let&apos;s discuss how we
            can help you achieve your goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>
            {status.type && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  status.type === "success"
                    ? "bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-200"
                    : "bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-200"
                }`}
              >
                {status.message}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6"
              aria-label="Contact form"
            >
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.company}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all transform hover:scale-[1.02] ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[600px] rounded-2xl overflow-hidden shadow-xl mt-8 md:mt-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Schedule a call with our team to discuss your project
                requirements.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:info@codecraftbyfranzyn.com"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors text-sm sm:text-base"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
                  info@codecraftbyfranzyn.com
                </a>
                <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
