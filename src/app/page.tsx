"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-transparent min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI Technology Background"
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
            Intelligent Solutions for Modern Businesses
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            We help modern businesses streamline workflows, scale operations,
            and unlock intelligence using tailored AI tools.
          </p>
          <motion.a
            href="mailto:info@codecraftbyfranzyn.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-500 transition-colors text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email us"
          >
            Get Started
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
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto py-32 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer cutting-edge AI solutions tailored to your business needs
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Custom AI Workflows",
              description:
                "OCR, GPT automation, and recommendation systems tailored to your business needs.",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            },
            {
              title: "AI Chatbots",
              description:
                "Intelligent chatbots that understand context and provide accurate responses.",
              image:
                "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
            },
            {
              title: "Data Analytics",
              description:
                "Transform your data into actionable insights with our advanced analytics solutions.",
              image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Likha AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of AI experts with years of industry experience",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored AI solutions that address your specific business challenges",
              },
              {
                title: "Proven Results",
                description:
                  "Track record of successful implementations and satisfied clients",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and maintenance",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI solutions can help you achieve your
              business goals
            </p>
            <motion.a
              href="mailto:info@codecraftbyfranzyn.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:bg-blue-700 focus:outline focus:outline-2 focus:outline-blue-500 transition-colors text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
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
