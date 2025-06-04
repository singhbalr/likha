"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-transparent min-h-[50vh] sm:min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Services"
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
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover how our custom AI solutions can transform your business
            operations and drive growth.
          </p>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <div className="grid gap-8 sm:gap-16">
          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center"
          >
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Custom AI Workflows"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Custom AI Workflows
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Streamline your business processes with intelligent automation
                powered by AI. Our custom workflows can handle complex tasks,
                reduce manual work, and improve efficiency.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Document processing and data extraction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Automated decision-making systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Intelligent process automation
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                AI-Powered Chatbots
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Enhance customer service and engagement with intelligent
                chatbots that understand and respond to natural language. Our
                chatbots can handle complex queries and provide personalized
                assistance.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    24/7 customer support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Multi-language support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Seamless integration with existing systems
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="AI Chatbot"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center"
          >
            <div className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="AI Analytics"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                AI Analytics & Insights
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                Transform your data into actionable insights with our advanced
                AI analytics solutions. Make data-driven decisions and stay
                ahead of the competition.
              </p>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Predictive analytics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Real-time data processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">
                    Custom reporting and dashboards
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI solutions can help you achieve your
            business goals.
          </p>
          <a
            href="mailto:info@codecraftbyfranzyn.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
