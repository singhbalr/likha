"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-transparent min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="AI Technology"
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
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can transform your business operations
          </p>
        </motion.div>
      </section>

      {/* Main Services Section */}
      <section className="max-w-7xl mx-auto py-32 px-4 sm:px-8">
        <div className="grid gap-16">
          {[
            {
              title: "Custom AI Workflows",
              description:
                "We develop tailored AI workflows that automate and optimize your business processes. Our solutions include OCR for document processing, GPT-powered automation, and intelligent recommendation systems.",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              features: [
                "Document processing and data extraction",
                "Intelligent workflow automation",
                "Custom recommendation engines",
                "Process optimization and analytics",
              ],
            },
            {
              title: "AI Chatbots",
              description:
                "Our AI chatbots provide intelligent, context-aware customer support and engagement. They understand natural language, maintain conversation context, and provide accurate, helpful responses.",
              image:
                "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
              features: [
                "Natural language understanding",
                "Context-aware conversations",
                "Multi-language support",
                "Seamless integration with existing systems",
              ],
            },
            {
              title: "Data Analytics",
              description:
                "Transform your data into actionable insights with our advanced analytics solutions. We help you understand patterns, predict trends, and make data-driven decisions.",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
              features: [
                "Predictive analytics",
                "Business intelligence dashboards",
                "Real-time data processing",
                "Custom reporting solutions",
              ],
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1"
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
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? "md:col-start-1" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can help you achieve your
              business goals
            </p>
            <motion.a
              href="mailto:singhbalr1@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-500 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
