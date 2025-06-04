"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 sm:px-8 bg-gradient-to-b from-blue-50 dark:from-gray-900 to-transparent min-h-[50vh] sm:min-h-[60vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="About us"
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
            About Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            We&apos;re a team of AI experts passionate about helping businesses
            leverage the power of artificial intelligence.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              We believe that AI should be accessible to businesses of all
              sizes. Our mission is to help companies harness the power of
              artificial intelligence to drive growth, efficiency, and
              innovation.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              With our expertise in machine learning, natural language
              processing, and computer vision, we create custom AI solutions
              that solve real business problems and deliver measurable results.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We stay at the forefront of AI technology to deliver cutting-edge
              solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We strive for excellence in everything we do, from code quality to
              customer service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">Collaboration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We work closely with our clients to understand their needs and
              deliver solutions that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          Our Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rajwinder Singh Bal</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Founder & AI Engineer
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              With over 5 years of experience in AI and machine learning,
              Rajwinder leads our team in developing innovative solutions for
              our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-16 sm:py-32 px-4 sm:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help transform your business with
            custom AI solutions.
          </p>
          <a
            href="mailto:info@codecraftbyfranzyn.com"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
