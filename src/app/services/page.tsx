import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | AI Solutions Co.",
  description:
    "Explore our custom AI-powered services for businesses: automation, chatbots, analytics, and more.",
};

const services = [
  {
    icon: "🧠",
    title: "Custom AI Workflows",
    desc: "OCR, GPT automation, and recommendation systems tailored to your business needs.",
  },
  {
    icon: "💬",
    title: "AI Chatbots",
    desc: "Conversational AI for customer support and engagement, available 24/7.",
  },
  {
    icon: "⚙️",
    title: "Process Automation",
    desc: "Automate internal tools and repetitive tasks to boost efficiency and reduce errors.",
  },
  {
    icon: "📄",
    title: "Document Intelligence",
    desc: "Extract, parse, and analyze data from invoices, forms, and business documents.",
  },
  {
    icon: "📊",
    title: "ML-powered Analytics Dashboards",
    desc: "Gain actionable insights with custom analytics and reporting powered by machine learning.",
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 sm:px-8">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>
      <ul className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <li
            key={service.title}
            className="flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow"
          >
            <span className="text-3xl" aria-hidden>
              {service.icon}
            </span>
            <div>
              <h2 className="text-xl font-semibold mb-1">{service.title}</h2>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {service.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
