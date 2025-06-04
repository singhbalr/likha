import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AI Solutions Co.",
  description:
    "Learn about our mission and founder's credentials in delivering custom AI-powered solutions to global businesses.",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-6 text-lg">
        AI Solutions Co. is dedicated to delivering reliable, custom-built AI
        software to clients worldwide. Our mission is to empower businesses to
        streamline workflows, scale operations, and unlock new intelligence
        through tailored AI tools and automation.
      </p>
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Founder Credentials</h2>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>7+ years experience in React & React Native</li>
          <li>
            Expertise in AI/ML integration (TensorFlow.js, Hugging Face, LLMs)
          </li>
          <li>DevOps and full product delivery (AWS, CI/CD, Docker)</li>
          <li>
            Worked with brands like Metrobank, PeachBioverse, and UPC Renewables
          </li>
        </ul>
      </div>
      <p className="text-base text-gray-700 dark:text-gray-300">
        We believe in building long-term partnerships and delivering solutions
        that drive real business value.
      </p>
    </section>
  );
}
